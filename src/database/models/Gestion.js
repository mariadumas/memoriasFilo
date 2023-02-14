const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Gestion"

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
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }
   

    };

    let config = {
        tableName: "gestion",
        timestamps: false
    }
    
    
   const Gestion = sequelize.define(alias, cols, config)

   Gestion.associate = (models) => {
    Gestion.belongsTo(models.Integrante, {
        as: "gestionIntegrante",
        foreignKey: "integrante_id"
    })
    Gestion.belongsTo(models.Instituto, {
        as: "gestionInstituto",
        foreignKey: "instituto_id"
    })
   }


    return Gestion;

}