module.exports = (sequelize, DataTypes) => {
    
    let alias = "Libro"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        editorial: {
            type: DataTypes.STRING(255)
        },
        coleccion: {
            type: DataTypes.STRING(255)     
        },
        numero: {
            type: DataTypes.INTEGER
        },
        ciudad: {
            type: DataTypes.STRING(60)
        },
        en_prensa: {
            type: DataTypes.BOOLEAN
        },
        year: {
            type: DataTypes.INTEGER
        },
        imagen: {
            type: DataTypes.STRING(100)
        },
        referato: {
            type: DataTypes.BOOLEAN
        },
        cant_paginas: {
            type: DataTypes.INTEGER
        },
        url_libro: {
            type: DataTypes.STRING(255)
        },
        isbn: {
            type: DataTypes.INTEGER
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        autor1: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        autor2:{
            type: DataTypes.INTEGER.UNSIGNED
        },
        autor3: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        autor4: {
            type: DataTypes.INTEGER.UNSIGNED
        },

    };

    let config = {
        tableName: "libro",
        timestamps: false
    }

    const Libro = sequelize.define(alias, cols, config)

    Libro.associate = (models) => {
        Libro.belongsTo(models.Instituto, {
            as: "libroInstituto",
            foreignKey: "instituto_id"
        })
        Libro.belongsTo(models.Integrante, {
            as: "libroIntegrante1",
            foreignKey: "autor1",
        })
        Libro.belongsTo(models.Integrante, {
            as: "libroIntegrante2",
            foreignKey: "autor2"
        })
        Libro.belongsTo(models.Integrante, {
            as: "libroIntegrante3",
            foreignKey: "autor3"
        })
        Libro.belongsTo(models.Integrante, {
            as: "libroIntegrante4",
            foreignKey: "autor4"
        })
    }


    return Libro

}


