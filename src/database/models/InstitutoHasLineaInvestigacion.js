const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "InstitutoHasLineaInvestigacion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        linea_investigacion_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false

        }

    };

    let config = {
        tableName: "instituto_has_linea_investigacion",
        timestamps: false
    }
    
    
   const InstitutoHasLineaInvestigacion = sequelize.define(alias, cols, config)

   InstitutoHasLineaInvestigacion.associate = (models) => {
    InstitutoHasLineaInvestigacion.belongsTo(models.Instituto, {
        foreignKey: "instituto_id"
    })
    InstitutoHasLineaInvestigacion.belongsTo(models.LineaInvestigacion, {
        foreignKey: "linea_investigacion_id"
    })
   }


    return InstitutoHasLineaInvestigacion;

}