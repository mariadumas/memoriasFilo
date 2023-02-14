const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "RolGestion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        integrante_id: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        rol: {
            type: DataTypes.STRING(45)
        },
        desde: {
            type: DataTypes.INTEGER
        },
        hasta: {
            type: DataTypes.INTEGER
        },
        vigente: {
            type: DataTypes.BOOLEAN
        },
   

    };

    let config = {
        tablename: "rol_gestion",
        timestamps: false
    }
    
    
   const RolGestion = sequelize.define(alias, cols, config)


    return RolGestion;

}