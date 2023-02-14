const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Beca"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(200)
        },
        institucion_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    };

    let config = {
        tablename: "beca",
        timestamps: false
    }
    
    
   const Beca = sequelize.define(alias, cols, config)


    return Beca;

}