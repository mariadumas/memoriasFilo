module.exports = (sequelize, DataTypes) => {
    
    let alias = "Institucion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(150)
        }, 
        logo_img: {
            type: DataTypes.STRING(60)
        }

    };

    let config = {
        tablename: "institucion",
        timestamps: false
    }

    const Institucion = sequelize.define(alias, cols, config)


    return Institucion

}
