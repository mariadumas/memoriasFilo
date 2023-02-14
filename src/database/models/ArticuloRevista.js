module.exports = (sequelize, DataTypes) => {
    
    let alias = "ArticuloRevista"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        autor1: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        autor2:{
            type: DataTypes.INTEGER.UNSIGNED
        },
        titulo: {
            type: DataTypes.STRING(255),
        },
        nombre_revista: {
            type: DataTypes.STRING(255)
        },
        volumen: {
            type: DataTypes.STRING(45)
        },
        numero: {
            type: DataTypes.STRING(45)
        },
        paginas: {
            type: DataTypes.STRING(45)
        },
        year: {
            type: DataTypes.INTEGER
        },
        con_scopus: {
            type: DataTypes.BOOLEAN
        },
        con_wos: {
            type: DataTypes.BOOLEAN
        }

    };

    let config = {
        tableName: "articulo_revista",
        timestamps: false
    }

    const ArticuloRevista = sequelize.define(alias, cols, config)

    ArticuloRevista.associate = (models) => {
        ArticuloRevista.belongsTo(models.Integrante, {
            as: "articuloRevistaIntegrante1",
            foreignKey: "autor1"
        })
        ArticuloRevista.belongsTo(models.Integrante, {
            as: "articuloRevistaIntegrante2",
            foreignKey: "autor2"
        })
    }

    return ArticuloRevista

}


