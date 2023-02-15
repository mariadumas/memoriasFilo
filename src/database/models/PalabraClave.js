const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "PalabraClave"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(45)
        }

    };

    let config = {
        tableName: "palabra_clave",
        timestamps: false
    }
    
    
   const PalabraClave = sequelize.define(alias, cols, config)

   PalabraClave.associate = (models) => {
    PalabraClave.belongsToMany(models.ProyectoInvestigacion, {
        through: "ProyectoInvestigacionHasPalabraClave",
        foreignKey: "palabra_clave_id",
        otherKey: "proyecto_investigacion_id",
        timestamps: false
    })
    PalabraClave.hasMany(models.ProyectoInvestigacionHasPalabraClave, {
        foreignKey: "palabra_clave_id"
    })
   }


    return PalabraClave;

}