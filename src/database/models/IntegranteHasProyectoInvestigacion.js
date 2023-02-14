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
        tableName: "integrante_has_proyecto_investigacion",
        timestamps: false
    }


    const IntegranteHasProyectoInvestigacion = sequelize.define(alias, cols, config)

    IntegranteHasProyectoInvestigacion.associate = (models) => {
        IntegranteHasProyectoInvestigacion.belongsTo(models.Integrante, {
            foreignKey: "integrante_id"
        })
        IntegranteHasProyectoInvestigacion.belongsTo(models.ProyectoInvestigacion, {
            foreignKey: "proyecto_investigacion_id"
        })
    }


    return IntegranteHasProyectoInvestigacion;

}