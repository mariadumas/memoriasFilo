const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "ProyectoInvestigacionHasPalabraClave"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        palabra_clave_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        proyecto_investigacion_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: "proyecto_investigacion_has_palabra_clave",
        timestamps: false
    }


    const ProyectoInvestigacionHasPalabraClave = sequelize.define(alias, cols, config)

    ProyectoInvestigacionHasPalabraClave.associate = (models) => {
        ProyectoInvestigacionHasPalabraClave.belongsTo(models.ProyectoInvestigacion, {
            foreignKey: "proyecto_investigacion_id"
        })
        ProyectoInvestigacionHasPalabraClave.belongsTo(models.PalabraClave, {
            foreignKey: "palabra_clave_id"
        })
    }


    return ProyectoInvestigacionHasPalabraClave;

}