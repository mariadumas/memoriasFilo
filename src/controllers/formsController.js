let db = require("../database/models")

const { Op } = require("sequelize");


const formsController = {
    admin: (req, res) => {

        res.render("forms/adminPanel", {title: "Administrar"})
    },

    createInstituto: (req, res) => {

        res.render("forms/createInstituto", { title: "Agregar Instituto" })
    },

    storeInstituto: (req, res) => {

        db.Instituto.create(
            {
                nombre: req.body.nombre,
                pertenencia: req.body.pertenencia,
                horario_atencion: req.body.horarioAtencion,
                horario_biblioteca: req.body.horarioBiblioteca,
                email: req.body.email,
                sede: req.body.sede,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                pagina_web: req.body.web,
                imagen: req.file.filename,
                logo: req.file ? req.file.filename : null,
                facebook: req.body.facebook,
                instagram: req.body.instagram,
                twitter: req.body.twitter,
                youtube: req.body.youtube,

            }
        )
            .then(() => {
                res.redirect("/institutos")
            })
            .catch((error) => {
                console.log(error);
            })

    },
    createIntegrante: async (req, res) => {

        try {

            let institutos = await db.Instituto.findAll(
                {  order: [
                      ["nombre", "ASC"]
                  ]}
              )

            let funciones = await db.Funcion.findAll()


            res.render("forms/createIntegrante", { title: "Agregar integrante", institutos: institutos, funciones: funciones })

        } catch (error) {
            console.log(error);

        }



    },
    storeIntegrante: async (req, res) => {
        try {
            let integranteData = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                nickname: req.body.nickname,
                email: req.body.email,
                gender: req.body.gender,
                instituto1: req.body.instituto1,
                instituto2: req.body.instituto2 !== "" ? req.body.instituto2 : null,
                con_cargo: req.body.cargo,
                funcion_id: req.body.funcion1,
                funcion2_id: req.body.funcion2 !== "" ? req.body.funcion2 : null,
            };
            if (req.file) {
                integranteData.logo = req.file.filename;
            } 
            await db.Integrante.create(integranteData);
            
            if (integranteData.con_cargo === "1") {
                // Redirect to a different page
                res.redirect("/forms/cargo");
            } else {
                // Redirect to the default page
                res.redirect("/forms/admin");
            }
        } catch (error) {
            console.log(error);
        }
    },

    createCargo: async (req, res) => {

        try {

            let integrantes = await db.Integrante.findAll({
                where: {
                    con_cargo: 1
                },
                order: [
                    ["apellido", "ASC"]
                ]
            })

            let cargos = await db.Cargo.findAll()

            let institutos = await db.Instituto.findAll(
              {  order: [
                    ["nombre", "ASC"]
                ]}
            )

            let instituciones = await db.Institucion.findAll()


            res.render("forms/createCargo", {title: "Agregar un nuevo cargo", integrantes: integrantes, cargos: cargos, institutos:institutos, instituciones:instituciones})


        } catch (error) {
            console.log(error);

        }


    },

    storeCargo: async (req, res) => {


        try {
            let dataCargo = {
                integrante_id: req.body.integrante,
                cargo_id: req.body.cargo,
                instituto_id: req.body.instituto,
                institucion_id: req.body.institucion        
            };
    
            await db.IntegranteHasCargo.create(dataCargo);
            res.redirect('/forms/admin');
            
        } catch (error) {
            console.log(error);
            
        }

     

    },
    createProyecto: async (req, res) => {
        try {

            let institutos = await db.Instituto.findAll(
                {  order: [
                      ["nombre", "ASC"]
                  ]}
              )

            let instituciones = await db.Institucion.findAll()

            res.render("forms/createProyecto", {title: "Agregar proyecto", institutos: institutos, instituciones: instituciones })

            
        } catch (error) {

            console.log(error);
            
        }



    }, 

    storeProyecto: async (req, res) => {

        try {
            let dataProyecto = {
                titulo: req.body.titulo,
                tipo_financiacion: req.body.tipo_financiacion,
                codigo: req.body.codigo,
                desde: req.body.desde,
                hasta: req.body.hasta,
                monto: req.body.monto,
                instituto_id: req.body.instituto,
                institucion_id: req.body.institucion,
                resumen: req.body.resumen
            };

            await db.ProyectoInvestigacion.create(dataProyecto);
            res.redirect("/forms/admin")


        } catch (error) {
            console.log(error);
            
        }

    },

    createMiembroProyecto: async (req, res) => {

        let integrantes = await db.Integrante.findAll({
            order: [
                ["apellido", "ASC"]
            ]
        })

        let proyectos = await db.ProyectoInvestigacion.findAll({
            order: [
                ["titulo", "ASC"]
            ]
        })

        res.render("forms/createMiembrosProyecto", {title: "Agregar miembros", integrantes:integrantes, proyectos: proyectos})


    },


    storeMiembroProyecto: async (req, res) => {

        try {

            let dataMiembros = {
                integrante_id: req.body.integrante,
                proyecto_investigacion_id: req.body.proyecto,
                rol: req.body.rol
            };

            await db.IntegranteHasProyectoInvestigacion.create(dataMiembros)

            res.redirect("/forms/admin")

            
        } catch (error) {
            console.log(error);
            
        }

    }

}
module.exports = formsController;