module.exports = (sequelize, DataTypes) => {
    
    let alias = "Convenio"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(255)
        }, 
        institucion_target: {
            type: DataTypes.STRING(255)
        }, 
        tipo: {
            type: DataTypes.STRING(45)
        },
        pais: {
            type: DataTypes.STRING(45)
        },
        desde: {
            type: DataTypes.INTEGER
        }, 
        hasta: {
            type: DataTypes.INTEGER
        }, 
        resolucion_link: {
            type: DataTypes.STRING(255)
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    };

    let config = {
        tableName: "convenio",
        timestamps: false
    }

    const Convenio = sequelize.define(alias, cols, config)
    Convenio.associate = (models) => {
        Convenio.belongsTo(models.Instituto, {
            as: "convenioInstituto",
            foreignKey: "instituto_id"
        })
    }


    return Convenio

}
