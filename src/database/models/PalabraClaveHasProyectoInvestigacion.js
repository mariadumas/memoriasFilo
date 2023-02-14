const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "PalabraClaveHasProyectoInvestigacion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        palabra_clave_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        proyecto_investigacion_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tablename: "palabra_clave_has_proyecto_investigacion",
        timestamps: false
    }


    const PalabraClaveHasProyectoInvestigacion = sequelize.define(alias, cols, config)


    return PalabraClaveHasProyectoInvestigacion;

}