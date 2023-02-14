const db = require("../database/models")

const indexController = {

    home: (req, res) => {
        res.render("index", { title: "Home" })
    },
    institutos: async (req, res) => {

        let institutos = await db.Instituto.findAll(
            {include: [
                {
                    association: "institutoReunionCientifica"
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
                association: "integranteActividadExtension1"
            }, {
                association: "integranteActividadExtension2"
            },{
                association: "integranteActividadExtension3"
            }, {
                association: "integranteActividadExtension4"
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

        let integranteOrgano = await db.IntegranteHasOrganoRepresentativo.findAll({
            include: [{
                association: "Integrante"
            }, {
                association: "OrganoRepresentativo"
            }]
        })



        res.json(integrantes)


        // res.render("institutos", {title: "Institutos"})
    }


}

module.exports = indexController;