const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Especialidad"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100)
        }

    };

    let config = {
        tablename: "especialidad",
        timestamps: false
    }
    
    
   const Especialidad = sequelize.define(alias, cols, config)


    return Especialidad;

}