const db = require("../database/models")

const indexController = {

    home: (req, res) => {
        res.render("index", { title: "Home" })
    },
    institutos: async (req, res) => {

        let institutos = await db.Instituto.findAll(
            {include: [
                {
                    association: "institutoIntegrante"
                }, 
                {
                    association: "institutoProyectoTesis"
                }
            ]}
        )

        let proyectosInvestigacion = await db.ProyectoInvestigacion.findAll(
            {
                include: [
                    {
                        association: "proyectoInvestigacionInstituto"
                    }, {
                        association: "proyectoInvestigacionInstitucion"
                    }
                ]
            }
        )

        let integrantesCargos = await db.IntegranteHasCargo.findAll({
            include: [{
                association: "Integrante"
                    },{
                association: "Cargo"
                    },
                {
                association: "Instituto",
                attributes: ["nombre"]
                },
                {
                    association: "Institucion"
                }
             ]
        })

        let integrantes = await db.Integrante.findAll({
            include: [{
                association: "integranteFuncion"
            }, {
                association: "integranteProyectoTesis"
            }]
        })

        let proyectosTesis = await db.ProyectoTesis.findAll({
            include: [{
                association: "proyectoTesisBeca"
            }, {
                association: "proyectoTesisIntegrante"
            }]
        })

        let instituciones = await db.Institucion.findAll({
            include: [{
                association: "institucionBeca"
            }]
        })

        let integranteProyecto = await db.IntegranteHasProyectoInvestigacion.findAll({
            include: [{
                association: "Integrante"
            },
        {
            association: "ProyectoInvestigacion"
        }]
        })



        res.json(integranteProyecto)


        // res.render("institutos", {title: "Institutos"})
    }


}

module.exports = indexController;