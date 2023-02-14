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
        tablename: "integrante",
        timestamps: false
    }

    const Integrante = sequelize.define(alias, cols, config)


    return Integrante

}
