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
        tableName: "premio",
        timestamps: false
    }
    
    
   const Premio = sequelize.define(alias, cols, config)

   Premio.associate = (models) => {
    Premio.belongsTo(models.Instituto, {
        as: "premioInstituto",
        foreignKey: "instituto_id"
    })
    Premio.belongsTo(models.Integrante, {
        as: "premioIntegrante",
        foreignKey: "premiado"
    })
   }


    return Premio;

}