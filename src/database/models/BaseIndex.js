const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "BaseIndex"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(45)
        },
        clasificacion: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(100),
        }

    };

    let config = {
        tableName: "base_index",
        timestamps: false
    }
    
    
   const BaseIndex = sequelize.define(alias, cols, config)

   BaseIndex.associate = (models) => {
    BaseIndex.belongsToMany(models.Revista, {
        through: "RevistaHasBaseIndex",
        foreignKey: "base_index_id",
        otherKey: "revista_id",
        timestamps: false
    })
    BaseIndex.hasMany(models.RevistaHasBaseIndex, {
        foreignKey: "base_index_id"
    })
   }


    return BaseIndex;

}