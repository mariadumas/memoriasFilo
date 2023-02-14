const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "ProgramaInvestigacion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(60),
        },
        desde: {
            type: DataTypes.INTEGER
        },
        hasta: {
            type: DataTypes.INTEGER
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
    };

    let config = {
        tablename: "programa_investigacion",
        timestamps: false
    }
    
    
   const ProgramaInvestigacion = sequelize.define(alias, cols, config)


    return ProgramaInvestigacion;

}