module.exports = (sequelize, DataTypes) => {

    let alias = "Instituto"
    // se especifican las columnas de la db en un objeto literal
    let cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        pertenencia: {
            type: DataTypes.STRING(45),
        },
        horario_atencion: {
            type: DataTypes.STRING(100)
        },
        horario_biblioteca: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(45),
        },
        sede: {
            type: DataTypes.STRING(45)
        },
        direccion: {
            type: DataTypes.STRING(250),
        },
        telefono: {
            type: DataTypes.STRING(45),
        },
        pagina_web: {
            type: DataTypes.STRING(150),
        },
        imagen: {
            type: DataTypes.STRING(100)
        },
        logo: {
            type: DataTypes.STRING(100),
        },
        facebook: {
            type: DataTypes.STRING(150),
        },
        instagram: {
            type: DataTypes.STRING(150),
        },
        twitter: {
            type: DataTypes.STRING(150),
        },
        youtube: {
            type: DataTypes.STRING(150),
        },
    };

    let config = {
        tableName: "instituto",
        timestamps: false
    }

    const Instituto = sequelize.define(alias, cols, config)

    Instituto.associate = (models) => {
        Instituto.hasMany(models.ProyectoInvestigacion, {
            as: "institutoProyectoInvestigacion",
            foreignKey: "instituto_id"
        })

        Instituto.hasMany(models.Integrante, {
            as: "institutoIntegrante",
            foreignKey: "instituto1"
        })
        Instituto.hasMany(models.Integrante, {
            as: "institutoIntegrante2",
            foreignKey: "instituto2"
        })
        Instituto.hasMany(models.IntegranteHasCargo, {
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.Gestion, {
            as: "institutoGestion",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.ProyectoTesis, {
            as: "institutoProyectoTesis",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.Premio, {
            as: "institutoPremio",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.OrganoRepresentativo, {
            as: "institutoOrganoRepresentativo",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.Convenio, {
            as: "institutoConvenio",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.CooperacionIntercambio, {
            as: "institutoCooperacionIntercambio",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.ActividadExtension, {
            as: "institutoActividadExtension",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.Libro, {
            as: "institutoLibro",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.Revista, {
            as: "institutoRevista",
            foreignKey: "instituto_id"
        })
        Instituto.hasMany(models.ReunionCientifica, {
            as: "institutoReunionCientifica",
            foreignKey: "instituto_id"
        })


    };





    return Instituto;


}
