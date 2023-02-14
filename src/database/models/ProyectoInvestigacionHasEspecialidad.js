const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "ProyectoInvestigacionHasEspecialidad"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        proyecto_investigacion_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        especialidad_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
    };

    let config = {
        tableName: "proyecto_investigacion_has_especialidad",
        timestamps: false
    }


    const ProyectoInvestigacionHasEspecialidad = sequelize.define(alias, cols, config)


    return ProyectoInvestigacionHasEspecialidad;

}