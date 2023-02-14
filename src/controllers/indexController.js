const db = require("../database/models")

const indexController = {

    home: (req, res) => {
        res.render("index", { title: "Home" })
    },
    institutos: async (req, res) => {

        // let institutos = await db.Instituto.findAll(
        //     {include: [
        //         {
        //             association: "institutoProyectoInvestigacion"
        //         }
        //     ]}
        // )

        let proyectosInvestigacion = await db.ProyectoInvestigacion.findAll(
            {
                include: [
                    {
                        association: "proyectoInvestigacionInstituto"
                    }
                ]
            }
        )

        // let integrantes = await db.Integrante.findAll({
        //     include: [{
        //         association: "integranteInstituto"
        //             }]
        // })

        res.json(proyectosInvestigacion)


        // res.render("institutos", {title: "Institutos"})
    }


}

module.exports = indexController;