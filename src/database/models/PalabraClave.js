const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "PalabraClave"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(45)
        }

    };

    let config = {
        tableName: "palabra_clave",
        timestamps: false
    }
    
    
   const PalabraClave = sequelize.define(alias, cols, config)


    return PalabraClave;

}