const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "IntegranteHasCargo"

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
        cargo_id: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        desde: {
            type: DataTypes.INTEGER
        },
        hasta: {
            type: DataTypes.INTEGER
        },
        descripcion: {
            type: DataTypes.TEXT

        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    };

    let config = {
        tablename: "integrante_has_cargo",
        timestamps: false
    }
    
    
   const IntegranteHasCargo = sequelize.define(alias, cols, config)


    return IntegranteHasCargo;

}