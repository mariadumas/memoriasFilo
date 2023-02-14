module.exports = (sequelize, DataTypes) => {
    
    let alias = "ActividadExtension"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipo_actividad: {
            type: DataTypes.STRING(45),
        },
        titulo_serie: {
            type: DataTypes.STRING(255)
        },
        titulo_actividad: {
            type: DataTypes.STRING(255)     
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        fecha: {
            type: DataTypes.DATEONLY
        },
        url_actividad: {
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
        tableName: "actividad_extension",
        timestamps: false
    }

    const ActividadExtension = sequelize.define(alias, cols, config)


    return ActividadExtension

}


