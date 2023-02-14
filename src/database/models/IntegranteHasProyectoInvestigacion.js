const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "IntegranteHasProyectoInvestigacion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        integrante_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        proyecto_investigacion_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING(100)
        }

    };

    let config = {
        tablename: "integrante_has_proyecto_investigacion",
        timestamps: false
    }


    const IntegranteHasProyectoInvestigacion = sequelize.define(alias, cols, config)


    return IntegranteHasProyectoInvestigacion;

}