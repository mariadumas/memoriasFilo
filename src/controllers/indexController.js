const db = require("../database/models")

const { Op } = require("sequelize");

const indexController = {

    home: async (req, res) => {
        try {


            let institutos = await db.Instituto.count()

            let proyectos = await db.ProyectoInvestigacion.count()

            let becarios = await db.ProyectoTesis.count({
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

        let integrantes = await db.Integrante.findAll()

        let cargos = await db.IntegranteHasCargo.findAll({
            include: [{
                association: "Integrante"
            }, {
                association: "Cargo"
            }
            ]
        })

        let miembros = await db.IntegranteHasProyectoInvestigacion.findAll({
            include: [{
                association: "Integrante"
            }, {
                association: "ProyectoInvestigacion"
            }]
        })

        let tesistas = await db.ProyectoTesis.findAll({
            where: {
                con_beca: 1
            },
            include: [{
                association: "proyectoTesisBeca"
            }, {
                association: "proyectoTesisIntegrante"
            }, {
                association: "proyectoTesisDirector"
            }, {
                association: "proyectoTesisCodirector"

            }]
        })


        let reuniones = await db.ReunionCientifica.findAll({

            include: [{
                association: "reunionCientificaIntegrante1"
            }, {
                association: "reunionCientificaIntegrante2"
            }, {
                association: "reunionCientificaIntegrante3"
            }, {
                association: "reunionCientificaIntegrante4"
            }
            ]
        })


  


        res.json(miembros)

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
        //                 association: "Integrante"
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



        // res.json(proyectosInvestigacion)



    },
    detail: async (req, res) => {
        try {

            let instituto = await db.Instituto.findByPk(req.params.id, {
                include: [{
                    association: "institutoIntegrante"
                }]
            })

            let integrantes = await db.Integrante.count({
                where: {
                    [Op.or]: [
                        {
                            [Op.and]: [
                                { instituto1: req.params.id },
                                { con_cargo: 1 }
                            ]
                        },
                        {
                            [Op.and]: [
                                { instituto2: req.params.id },
                                { con_cargo: 1 }
                            ]
                        }
                    ]
                }
            });

            let proyectos = await db.ProyectoInvestigacion.count({
                where: {
                    instituto_id: req.params.id
                }
            })

            let becarixs = await db.ProyectoTesis.count({
                where: {
                    instituto_id: req.params.id
                }
            })

            let libros = await db.Libro.count({
                where: {
                    instituto_id: req.params.id
                }
            })

            let revistas = await db.Revista.count({
                where: {
                    instituto_id: req.params.id
                }
            })

            let reuniones = await db.ReunionCientifica.count({
                where: {
                    instituto_id: req.params.id
                }
            })

            let extension = await db.ActividadExtension.count({
                where: {
                    instituto_id: req.params.id
                }
            })

            let cooperacion = await db.CooperacionIntercambio.count({
                where: {
                    instituto_id: req.params.id
                }
            })


            let convenios = await db.Convenio.count({
                where: {
                    instituto_id: req.params.id
                }
            })

            let premios = await db.Premio.count({
                where: {
                    instituto_id: req.params.id
                }
            })



                .catch((error) => {
                    console.log(error);
                })





            res.render("detail", { instituto: instituto, title: instituto.nombre, integrantes: integrantes, proyectos: proyectos, becarixs: becarixs, libros: libros, revistas: revistas, reuniones: reuniones, extension: extension, cooperacion: cooperacion, convenios: convenios, premios: premios })
        }


        catch (error) {
            console.log(error)
        }
    },

    integrantes: async (req, res) => {

        try {

            let institutos = await db.Instituto.findByPk(req.params.id, {
                include: [{
                    association: "institutoIntegrante"
                }]
            })

            let integrantes = await db.Integrante.findAll({
                where: {
                    instituto1: req.params.id
                }, include: [{
                    association: "integranteFuncion"
                }]
            })

            let cargosUBA = await db.IntegranteHasCargo.count({
                where: {
                    cargo_id: {
                        [Op.or]: [6, 7, 8]
                    },
                   instituto_id: req.params.id
                }
            })

            let cargosCONICET = await db.IntegranteHasCargo.count({
                where: {
                    cargo_id: {
                        [Op.or]: [1, 2, 3, 4, 5]
                    },
                    instituto_id: req.params.id
                }
            })

            let noDocentes = await db.IntegranteHasCargo.count({
                where: {
                    cargo_id: {
                        [Op.or]: [9, 10, 11, 12, 13, 14, 15, 16]
                    },
                    instituto_id: req.params.id
                }
            })

            let cpa = await db.IntegranteHasCargo.count({
                where: {
                    cargo_id: {
                        [Op.or]: [17]
                    },
                    instituto_id: req.params.id
                }
            })


            let cargos = await db.IntegranteHasCargo.findAll({
                where: {
                    instituto_id: req.params.id
                },
                include: [{
                    association: "Integrante"
                }, {
                    association: "Cargo"
                }]
            })


            res.render("integrantes", { title: "Integrantes", cargos: cargos, institutos: institutos, integrantes: integrantes, cargosUBA: cargosUBA, cargosCONICET: cargosCONICET, noDocentes: noDocentes, cpa: cpa })




        } catch (error) {
            console.log(error);

        }



    },
    proyectos: async (req, res) => {
        try {

            let ubacyt = await db.ProyectoInvestigacion.count({
                where: {
                    tipo_financiacion: "UBACyT",
                    instituto_id: req.params.id
                },
         
            })

            let filocyt = await db.ProyectoInvestigacion.count({
                where: {
                    tipo_financiacion: "FILOCyT",
                    instituto_id: req.params.id
                }
            })

            let pict = await db.ProyectoInvestigacion.count({
                where: {
                    tipo_financiacion: "PICT",
                    instituto_id: req.params.id
                }
            })

            let pip = await db.ProyectoInvestigacion.count({
                where: {
                    tipo_financiacion: "PIP",
                    instituto_id: req.params.id
                }
            })

            // let otros = await db.ProyectoInvestigacion.count({
            //     where: {
            //         tipo_financiacion: {
            //             [Op.ne]: ["UBACyT", "FILOCyT", "PIP", "PICT"] }
            //     }
            // })




            let proyectoMiembros = await db.IntegranteHasProyectoInvestigacion.findAll({
                include: [{
                    association: "Integrante"
                }, {
                    association: "ProyectoInvestigacion",
                    where: {
                        instituto_id: req.params.id
                    }
                }]
            })

            res.render("proyectos", { title: "Proyectos de investigación", proyectoMiembros: proyectoMiembros, ubacyt: ubacyt, filocyt: filocyt, pict: pict, pip: pip })

        } catch (error) {
            console.log(error);

        }
    },
    becarixs: async (req, res) => {

        try {

            let uba = await db.ProyectoTesis.count({
                where: {
                    instituto_id: req.params.id,
                    beca_id: {
                        [Op.or]: [1, 2, 3, 4, 5]
                    }
                }

            })

            let conicet = await db.ProyectoTesis.count({
                where: {
                    instituto_id: req.params.id,
                    beca_id: {
                        [Op.or]: [6, 7, 8, 10]
                    }
                }

            })


            let cin = await db.ProyectoTesis.count({
                where: {
                    instituto_id: req.params.id,
                    beca_id: {
                        [Op.or]: [9, 11]
                    }
                }

            })


            let agencia = await db.ProyectoTesis.count({
                where: {
                    instituto_id: req.params.id,
                    beca_id: 12
                }

            })

            let doctoradoUBA = await db.ProyectoTesis.count({
                where: {
                    instituto_id: req.params.id,
                    beca_id: 3
                }
            })


            let doctoradoCONICET = await db.ProyectoTesis.count({
                where: {
                    instituto_id: req.params.id,
                    beca_id: 6
                }
            })

            let tesistas = await db.ProyectoTesis.findAll({
                where: {
                    instituto_id: req.params.id,
                    con_beca: 1
                },
                include: [{
                    association: "proyectoTesisBeca"
                }, {
                    association: "proyectoTesisIntegrante"
                }, {
                    association: "proyectoTesisDirector"
                }, {
                    association: "proyectoTesisCodirector"
                }]
            })



            res.render("becarixs", { title: "Becarixs", uba: uba, conicet: conicet, cin: cin, agencia: agencia, tesistas: tesistas, doctoradoUBA: doctoradoUBA, doctoradoCONICET: doctoradoCONICET })

        } catch (error) {
            console.log(error);

        }

    },
    publicaciones: async (req, res) => {
        try {

            let libros = await db.Libro.findAll({
                where: {
                    instituto_id: req.params.id
                },
                include: [{
                    association: "libroIntegrante1"
                }, {
                    association: "libroIntegrante2"
                }, {
                    association: "libroIntegrante3"
                }, {
                    association: "libroIntegrante4"
                }
                ]
            })


            let revistas = await db.Revista.findAll({
                where: {
                    instituto_id: req.params.id
                },
                include: [{
                    association: "revistaIntegrante1"
                }, {
                    association: "revistaIntegrante2"
                }, {
                    association: "revistaIntegrante3"
                }, {
                    association: "revistaIntegrante4"
                }
                ]
            })

            res.render("publicaciones", { title: "Publicaciones", libros: libros, revistas: revistas })


        } catch (error) {
            console.log(error);

        }
    },
    reuniones: async (req, res) => {
        try {

            let reuniones = await db.ReunionCientifica.findAll({
                where: {
                    instituto_id: req.params.id
                },
                include: [{
                    association: "reunionCientificaIntegrante1"
                },
                {
                    association: "reunionCientificaIntegrante2"
                }, {
                    association: "reunionCientificaIntegrante3"
                }, {
                    association: "reunionCientificaIntegrante4"
                }]
            })

            let actividades = await db.ActividadExtension.findAll({
                where: {
                    instituto_id: req.params.id 
                }, 
                include: [{
                    association: "actividadExtensionIntegrante1"
                }, 
                {
                    association: "actividadExtensionIntegrante2"
                },
                {
                    association: "actividadExtensionIntegrante3"
                },
                {
                    association: "actividadExtensionIntegrante4"
                }]
            })


            res.render("reuniones", { title: "Reuniones científicas", reuniones: reuniones, actividades: actividades })


        } catch (error) {
            console.log(error);

        }
    },
    premios: async (req, res) => {

        try {

            let premios = await db.Premio.findAll({
                where: {
                    instituto_id: req.params.id    
                },
                include: [{
                    association: "premioIntegrante"
                }]
            })



            res.render("premios", {title: "Premios", premios: premios})
            
        } catch (error) {
            console.log(error);
            
        }


    },
    relaciones: async (req, res) => {

        try {

            let relaciones = await db.CooperacionIntercambio.findAll({
                where: {
                    instituto_id: req.params.id
                },
                include: [{
                    association: "CooperacionIntercambioIntegrante"
                }]
            })

            let convenios = await db.Convenio.findAll({
                where: {
                    instituto_id: req.params.id
                }
            })

            res.render("relaciones", {title: "Relaciones de cooperación e intercambio", relaciones: relaciones, convenios: convenios})







            
        } catch (error) {
            console.log(error);
            
        }




    }

}


module.exports = indexController;