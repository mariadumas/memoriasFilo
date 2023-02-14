module.exports = (sequelize, DataTypes) => {
    
    let alias = "Institucion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(150)
        }, 
        logo_img: {
            type: DataTypes.STRING(60)
        }

    };

    let config = {
        tableName: "institucion",
        timestamps: false
    }

    const Institucion = sequelize.define(alias, cols, config)

    Institucion.associate = (models) => {
        Institucion.hasMany(models.IntegranteHasCargo, {
            // as: "institucionIntegranteHasCargo",
            foreignKey: "institucion_id"
        })
        Institucion.hasMany(models.Beca, {
            as: "institucionBeca",
            foreignKey: "institucion_id"
        })
        Institucion.hasMany(models.ProyectoInvestigacion, {
            as: "institucionProyectoInvestigacion",
            foreignKey: "institucion_id"
        })


    }

    return Institucion

}
