const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "IntegranteHasOrganoRepresentativo"

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
        organo_representativo_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING(45)
        },
        categoria: {
            type: DataTypes.STRING(45)
        },
        desde: {
            type: DataTypes.INTEGER
        },
        hasta: {
            type: DataTypes.INTEGER
        }
    };

    let config = {
        tableName: "integrante_has_organo_representativo",
        timestamps: false
    }


    const IntegranteHasOrganoRepresentativo = sequelize.define(alias, cols, config)

    IntegranteHasOrganoRepresentativo.associate = (models) => {
        IntegranteHasOrganoRepresentativo.belongsTo(models.Integrante, {
            foreignKey: "integrante_id"
        })
        IntegranteHasOrganoRepresentativo.belongsTo(models.OrganoRepresentativo, {
            foreignKey: "organo_representativo_id"
        })
    }


    return IntegranteHasOrganoRepresentativo;

}


