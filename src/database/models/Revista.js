module.exports = (sequelize, DataTypes) => {
    
    let alias = "Revista"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        volumen: {
            type: DataTypes.STRING(45)
        },
        titulo_volumen: {
            type: DataTypes.STRING(255)     
        },
        numero: {
            type: DataTypes.STRING(45)
        },
        en_prensa: {
            type: DataTypes.BOOLEAN
        },
        fecha: {
            type: DataTypes.INTEGER
        },
        imagen: {
            type: DataTypes.STRING(100)
        },
        referato: {
            type: DataTypes.BOOLEAN
        },
        con_indexacion: {
            type: DataTypes.BOOLEAN
        },
        issn_online: {
            type: DataTypes.STRING(45)
        },
        issn_impreso: {
            type: DataTypes.STRING(45)
        },
        url_revista: {
            type: DataTypes.STRING(255)
        },
        editor1: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        editor2:{
            type: DataTypes.INTEGER.UNSIGNED
        },
        editor3: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        editor4: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    };

    let config = {
        tableName: "revista",
        timestamps: false
    }

    const Revista = sequelize.define(alias, cols, config)

    Revista.associate = (models) => {
        Revista.belongsTo(models.Instituto, {
            as: "revistaInstituto",
            foreignKey: "instituto_id"
        })
        Revista.belongsTo(models.Integrante, {
            as: "revistaIntegrante1",
            foreignKey: "editor1",
        })
        Revista.belongsTo(models.Integrante, {
            as: "revistaIntegrante2",
            foreignKey: "editor2"
        })
        Revista.belongsTo(models.Integrante, {
            as: "revistaIntegrante3",
            foreignKey: "editor3"
        })
        Revista.belongsTo(models.Integrante, {
            as: "revistaIntegrante4",
            foreignKey: "editor4"
        })
    }



    return Revista

}


