module.exports = (sequelize, DataTypes) => {
    
    let alias = "ProyectoTesis"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        investigador: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }, 
        titulo_proyecto: {
            type: DataTypes.STRING(255),
        },
        director: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        codirector: {
            type: DataTypes.INTEGER.UNSIGNED      
        },
        resumen: {
            type: DataTypes.TEXT
        },
        tipo_nivel: {
            type: DataTypes.STRING(45)
        }, 
        con_beca:{
            type: DataTypes.BOOLEAN
        },
        beca_id: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        beca_desde: {
            type: DataTypes.INTEGER
        },
        beca_hasta: {
            type: DataTypes.INTEGER
        },
        finalizado: {
            type: DataTypes.BOOLEAN
        },
        fecha_defensa: {
            type: DataTypes.DATEONLY
        },
        link_repositorio: {
            type: DataTypes.STRING(255)    
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        especialidad_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }

    };

    let config = {
        tablename: "proyecto_tesis",
        timestamps: false
    }

    const ProyectoTesis = sequelize.define(alias, cols, config)


    return ProyectoTesis

}
