module.exports = (sequelize, DataTypes) => {
    
    let alias = "Integrante"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false
        }, 
        apellido: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING(45),
            unique: true
        },
        email: {
            type: DataTypes.STRING(60)
        },
        imagen: {
            type: DataTypes.STRING(100)
        },
        con_cargo:{
            type: DataTypes.BOOLEAN
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        instituto1: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        instituto2: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        funcion_id: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        funcion2_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }

    };

    let config = {
        tableName: "integrante",
        timestamps: false
    }

    const Integrante = sequelize.define(alias, cols, config)


    Integrante.associate = (models) => {
        Integrante.belongsTo(models.Instituto, {
            as: "integranteInstituto",
            foreignKey: "instituto1"
        })
        Integrante.belongsTo(models.Instituto, {
            as: "integranteInstituto2",
            foreignKey: "instituto2"
        })
        Integrante.belongsToMany(models.Cargo, {
            through: "IntegranteHasCargo",
            foreignKey: "integrante_id",
            otherKey: "cargo_id",
            timestamps: false
        })
        Integrante.hasMany(models.IntegranteHasCargo, {
            foreignKey: "integrante_id"
        })
        Integrante.belongsTo(models.Funcion, {
            as: "integranteFuncion",
            foreignKey: "funcion_id"
        })
        Integrante.hasMany(models.Gestion, {
            as: "integranteGestion",
            foreignKey: "integrante_id"
        })
        Integrante.hasMany(models.ProyectoTesis, {
            as: "integranteProyectoTesis",
            foreignKey: "investigador"
        })
        Integrante.hasMany(models.ProyectoTesis, {
            as: "directorProyectoTesis",
            foreignKey: "director"
        })
        Integrante.hasMany(models.ProyectoTesis, {
            as: "codirectorProyectoTesis",
            foreignKey: "codirector"
        })
        Integrante.belongsToMany(models.ProyectoInvestigacion, {
            through: "IntegranteHasProyectoInvestigacion",
            foreignKey: "integrante_id",
            otherKey: "proyecto_investigacion_id",
            timestamps: false
        })
        Integrante.hasMany(models.IntegranteHasProyectoInvestigacion, {
            foreignKey: "integrante_id"
        })
        Integrante.hasMany(models.Premio, {
            as: "integrantePremio",
            foreignKey: "premiado"
        })
        Integrante.belongsToMany(models.OrganoRepresentativo, {
            through: "IntegranteHasOrganoRepresentativo",
            foreignKey: "integrante_id",
            otherKey: "organo_representativo_id",
            timestamps: false
        })
        Integrante.hasMany(models.IntegranteHasOrganoRepresentativo, {
            foreignKey: "integrante_id"
        })
        Integrante.hasMany(models.CooperacionIntercambio, {
            as: "integranteCooperacionIntercambio",
            foreignKey: "participante"
        })
        Integrante.hasMany(models.ArticuloRevista, {
            as: "integranteArticuloRevista1",
            foreignKey: "autor1"
        })
        Integrante.hasMany(models.ArticuloRevista, {
            as: "integranteArticuloRevista2",
            foreignKey: "autor2"
        })
        Integrante.hasMany(models.Libro, {
            as: "integranteLibro1",
            foreignKey: "autor1"
        })
        Integrante.hasMany(models.Libro, {
            as: "integranteLibro2",
            foreignKey: "autor2"
        })
        Integrante.hasMany(models.Libro, {
            as: "integranteLibro3",
            foreignKey: "autor3"
        })
        Integrante.hasMany(models.Libro, {
            as: "integranteLibro4",
            foreignKey: "autor4"
        })
        Integrante.hasMany(models.Revista, {
            as: "integranteRevista1",
            foreignKey: "editor1"
        })
        Integrante.hasMany(models.Revista, {
            as: "integranteRevista2",
            foreignKey: "editor2"
        })
        Integrante.hasMany(models.Revista, {
            as: "integranteRevista3",
            foreignKey: "editor3"
        })
        Integrante.hasMany(models.Revista, {
            as: "integranteRevista4",
            foreignKey: "editor4"
        })
        Integrante.hasMany(models.ReunionCientifica, {
            as: "integranteReunionCientifica1",
            foreignKey: "organizador1"
        })
        Integrante.hasMany(models.ReunionCientifica, {
            as: "integranteReunionCientifica2",
            foreignKey: "organizador2"
        })
        Integrante.hasMany(models.ReunionCientifica, {
            as: "integranteReunionCientifica3",
            foreignKey: "organizador3"
        })
        Integrante.hasMany(models.ReunionCientifica, {
            as: "integranteReunionCientifica4",
            foreignKey: "organizador4"
        })
        Integrante.hasMany(models.ActividadExtension, {
            as: "integranteActividadExtension1",
            foreignKey: "organizador1"
        })
        Integrante.hasMany(models.ActividadExtension, {
            as: "integranteActividadExtension2",
            foreignKey: "organizador2"
        })
        Integrante.hasMany(models.ActividadExtension, {
            as: "integranteActividadExtension3",
            foreignKey: "organizador3"
        })
        Integrante.hasMany(models.ActividadExtension, {
            as: "integranteActividadExtension4",
            foreignKey: "organizador4"
        })
  
    }


    return Integrante

}
