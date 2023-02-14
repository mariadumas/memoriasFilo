module.exports = (sequelize, DataTypes) => {
    
    let alias = "ReunionCientifica"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(45),
        },
        desde: {
            type: DataTypes.INTEGER
        },
        hasta: {
            type: DataTypes.INTEGER
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        imagen: {
            type: DataTypes.STRING(100)
        },
        url_reunion: {
            type: DataTypes.STRING(255)
        },
        url_grabacion: {
            type: DataTypes.STRING(255)
        },
        organizador1: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        organizador2:{
            type: DataTypes.INTEGER.UNSIGNED
        },
        organizador3: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        organizador4: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    };

    let config = {
        tableName: "reunion_cientifica",
        timestamps: false
    }

    const ReunionCientifica = sequelize.define(alias, cols, config)

    ReunionCientifica.associate = (models) => {
        ReunionCientifica.belongsTo(models.Instituto, {
            as: "reunionCientificaInstituto",
            foreignKey: "instituto_id"
        })
        ReunionCientifica.belongsTo(models.Integrante, {
            as: "reunionCientificaIntegrante1",
            foreignKey: "organizador1",
        })
        ReunionCientifica.belongsTo(models.Integrante, {
            as: "reunionCientificaIntegrante2",
            foreignKey: "organizador2"
        })
        ReunionCientifica.belongsTo(models.Integrante, {
            as: "reunionCientificaIntegrante3",
            foreignKey: "organizador3"
        })
        ReunionCientifica.belongsTo(models.Integrante, {
            as: "reunionCientificaIntegrante4",
            foreignKey: "organizador4"
        })
    }


    return ReunionCientifica

}


