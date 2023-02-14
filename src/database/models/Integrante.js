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
        },

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
        Integrante.belongsToMany(models.ProyectoInvestigacion, {
            through: "IntegranteHasProyectoInvestigacion",
            foreignKey: "integrante_id",
            otherKey: "proyecto_investigacion_id",
            timestamps: false
        })
        Integrante.hasMany(models.IntegranteHasProyectoInvestigacion, {
            foreignKey: "integrante_id"
        })

  
    }


    return Integrante

}
