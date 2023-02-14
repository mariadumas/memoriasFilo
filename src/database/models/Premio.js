const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Premio"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        fecha: {
            type: DataTypes.DATEONLY
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        premiado: {
            type: DataTypes.INTEGER.UNSIGNED
        }
    };

    let config = {
        tablename: "premio",
        timestamps: false
    }
    
    
   const Premio = sequelize.define(alias, cols, config)


    return Premio;

}