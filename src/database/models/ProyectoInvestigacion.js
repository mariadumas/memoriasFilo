module.exports = (sequelize, DataTypes) => {
    
    let alias = "ProyectoInvestigacion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(250),
        },
        tipo_financiacion: {
            type: DataTypes.STRING(45)
        },
        programacion: {
            type: DataTypes.STRING(45)     
        },
        codigo: {
            type: DataTypes.STRING(45)
        },
        desde: {
            type: DataTypes.INTEGER
        },
        hasta: {
            type: DataTypes.INTEGER
        },
        monto: {
            type: DataTypes.DECIMAL(8,2)
        },
        resumen: {
            type: DataTypes.TEXT
        }, 
        imagen:{
            type: DataTypes.STRING(255)
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }, 
        institucion_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    };

    let config = {
        freezeTableName: true,
        timestamps: false
    }

    const ProyectoInvestigacion = sequelize.define(alias, cols, config)

    ProyectoInvestigacion.associate = (models) => {
        ProyectoInvestigacion.belongsTo(models.Instituto, {
            as: "proyectoInvestigacionInstituto",
            foreignKey: "instituto_id"
        })
        ProyectoInvestigacion.belongsTo(models.Institucion, {
            as: "proyectoInvestigacionInstitucion",
            foreignKey: "institucion_id"
        })
        ProyectoInvestigacion.belongsToMany(models.Integrante, {
            through: "IntegranteHasProyectoInvestigacion",
            foreignKey: "proyecto_investigacion_id",
            otherKey: "integrante_id",
            timestamps: false
        })
        ProyectoInvestigacion.hasMany(models.IntegranteHasProyectoInvestigacion, {
            foreignKey: "proyecto_investigacion_id"
        })
        ProyectoInvestigacion.belongsToMany(models.PalabraClave, {
            through: "ProyectoInvestigacionHasPalabraClave",
            foreignKey: "proyecto_investigacion_id",
            otherKey: "palabra_clave_id",
            timestamps: false
        })
        ProyectoInvestigacion.hasMany(models.ProyectoInvestigacionHasPalabraClave, {
            foreignKey: "proyecto_investigacion_id"
        })
        ProyectoInvestigacion.belongsToMany(models.Especialidad, {
            through: "ProyectoInvestigacionHasEspecialidad",
            foreignKey: "proyecto_investigacion_id",
            otherKey: "especialidad_id",
            timestamps: false
        })
        ProyectoInvestigacion.hasMany(models.ProyectoInvestigacionHasEspecialidad, {
            foreignKey: "proyecto_investigacion_id"
        })

    }




    return ProyectoInvestigacion

}
