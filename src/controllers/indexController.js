const db = require("../database/models")

const indexController = {

    home: async (req, res) => {
        try {


            let institutos = await db.Instituto.findAll()

            let proyectos = await db.ProyectoInvestigacion.findAll()

            let becarios = await db.ProyectoTesis.findAll({
                where: {
                    con_beca: 1
                }
            })


            res.render("index", { title: "Home", institutos: institutos, proyectos: proyectos, becarios: becarios })
        }

        catch (error) {
            console.log(error);

        }
    },
    create: (req, res) => {
        res.render("createInstituto", { title: "Agregar Instituto" })
    },
    store: (req, res) => {

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
                logo: req.file.filename,
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
    json: async (req, res) => {
        let institutos = await db.Instituto.findAll(
            {
                include: [
                    {
                        association: "institutoIntegranteHasCargo"
                    }
                ]
            }
        )

        let integrantes = await db.Integrante.findAll({
            include: [{
                association: "integranteGestion"
            }]
        })

        res.json(institutos)

    },

    institutos: async (req, res) => {

        try {
            let institutos = await db.Instituto.findAll(
                {
                    include: [
                        {
                            association: "institutoGestion",
                            separate: true,
                            order: [['id', 'asc']]
                        }],
                }
            )
    
            let integrantes = await db.Integrante.findAll({
                include: [{
                    association: "integranteGestion"
                }]
            })
    
    
            res.render("institutos", { title: "Institutos", institutos: institutos, integrantes: integrantes })
            
        } catch (error) {
            console.log(error);
            
        }


        // let proyectosInvestigacion = await db.ProyectoInvestigacion.findAll(
        //     {
        //         include: [
        //             {
        //                 association: "proyectoInvestigacionInstituto"
        //             }, {
        //                 association: "proyectoInvestigacionInstitucion"
        //             }
        //         ]
        //     }
        // )

        // let integrantesCargos = await db.IntegranteHasCargo.findAll({
        //     include: [{
        //         association: "Integrante"
        //             },{
        //         association: "Cargo"
        //             },
        //         {
        //         association: "Instituto",
        //         attributes: ["nombre"]
        //         },
        //         {
        //             association: "Institucion"
        //         }
        //      ]
        // })

        // let integrantes = await db.Integrante.findAll({
        //     include: [{
        //         association: "integranteActividadExtension1"
        //     }, {
        //         association: "integranteActividadExtension2"
        //     },{
        //         association: "integranteActividadExtension3"
        //     }, {
        //         association: "integranteActividadExtension4"
        //     }]
        // })

        // let proyectosTesis = await db.ProyectoTesis.findAll({
        //     include: [{
        //         association: "proyectoTesisBeca"
        //     }, {
        //         association: "proyectoTesisIntegrante"
        //     }]
        // })

        // let instituciones = await db.Institucion.findAll({
        //     include: [{
        //         association: "institucionBeca"
        //     }]
        // })

        // let integranteProyecto = await db.IntegranteHasProyectoInvestigacion.findAll({
        //     include: [{
        //         association: "Integrante"
        //     },
        // {
        //     association: "ProyectoInvestigacion"
        // }]
        // })

        // let integranteOrgano = await db.IntegranteHasOrganoRepresentativo.findAll({
        //     include: [{
        //         association: "Integrante"
        //     }, {
        //         association: "OrganoRepresentativo"
        //     }]
        // })

        // let lineasInvestigacion = await db.InstitutoHasLineaInvestigacion.findAll({
        //     include: [{
        //         association: "Instituto"
        //     },{
        //         association: "LineaInvestigacion"
        //     }]
        // })

        // let palabrasClave = await db.ProyectoInvestigacionHasPalabraClave.findAll({
        //     include: [{
        //         association: "ProyectoInvestigacion"
        //     }, {
        //         association: "PalabraClave"
        //     }]
        // })

        // let especialidades = await db.ProyectoInvestigacionHasEspecialidad.findAll({
        //     include: [{
        //         association: "ProyectoInvestigacion"
        //     }, {
        //         association: "Especialidad"
        //     }]
        // })

        // let bases = await db.RevistaHasBaseIndex.findAll({
        //     include: [{
        //         association: "Revista"
        //     }, {
        //         association: "BaseIndex"
        //     }]
        // })



        // res.json(especialidades)



    },
    detail: async (req, res) => {
        try {



            let instituto = await db.Instituto.findByPk(req.params.id, {
                include: [{
                    association: "institutoProyectoInvestigacion"
                }, {
                    association: "institutoIntegrante"
                }, {
                    association: "institutoProyectoTesis"
                }, {
                    association: "institutoLibro"
                }, {
                    association: "institutoRevista"
                }, {
                    association: "institutoReunionCientifica"
                }, {
                    association: "institutoActividadExtension"
                }, {
                    association: "institutoConvenio"
                }, {
                    association: "institutoPremio"
                }, {
                    association: "institutoCooperacionIntercambio"
                }]
            })
                .catch((error) => {
                    console.log(error);
                })




            res.render("detail", { instituto: instituto, title: instituto.nombre })
        }


        catch (error) {
            console.log(error)
        }
    }

}


module.exports = indexController;