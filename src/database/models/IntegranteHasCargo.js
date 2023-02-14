const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "IntegranteHasCargo"

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
        cargo_id: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        desde: {
            type: DataTypes.INTEGER
        },
        hasta: {
            type: DataTypes.INTEGER
        },
        descripcion: {
            type: DataTypes.TEXT

        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        institucion_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }

    };

    let config = {
        tableName: "integrante_has_cargo",
        timestamps: false
    }
    
    
   const IntegranteHasCargo = sequelize.define(alias, cols, config)

   IntegranteHasCargo.associate = (models) => {
    IntegranteHasCargo.belongsTo(models.Instituto, {
        foreignKey: "instituto_id"
    })
    IntegranteHasCargo.belongsTo(models.Integrante, {
        foreignKey: "integrante_id"
    })
    IntegranteHasCargo.belongsTo(models.Cargo, {
        foreignKey: "cargo_id"
    })
    IntegranteHasCargo.belongsTo(models.Institucion, {
        foreignKey: "institucion_id"
    })

   }


    return IntegranteHasCargo;

}