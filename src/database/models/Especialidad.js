const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Especialidad"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100)
        }

    };

    let config = {
        tableName: "especialidad",
        timestamps: false
    }
    
    
   const Especialidad = sequelize.define(alias, cols, config)

   Especialidad.associate = (models) => {
    Especialidad.belongsToMany(models.ProyectoInvestigacion, {
        through: "ProyectoInvestigacionHasEspecialidad",
        foreignKey: "especialidad_id",
        otherKey: "proyecto_investigacion_id",
        timestamps: false
    })
    Especialidad.hasMany(models.ProyectoInvestigacionHasEspecialidad, {
        foreignKey: "especialidad_id"
    })

}


    return Especialidad;

}