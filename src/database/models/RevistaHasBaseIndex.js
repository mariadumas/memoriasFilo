const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "RevistaHasBaseIndex"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        revista_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        base_index_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: "revista_has_base_index",
        timestamps: false
    }


    const RevistaHasBaseIndex = sequelize.define(alias, cols, config)

    RevistaHasBaseIndex.associate = (models) => {
        RevistaHasBaseIndex.belongsTo(models.Revista, {
            as: "Revista",
            foreignKey: "revista_id"
        })
        RevistaHasBaseIndex.belongsTo(models.BaseIndex, {
            foreignKey: "base_index_id"
        })
    }


    return RevistaHasBaseIndex;

}