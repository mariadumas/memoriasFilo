module.exports = (sequelize, DataTypes) => {
    
    let alias = "Funcion"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(60)
        }

    };

    let config = {
        tablename: "funcion",
        timestamps: false
    }

    const Funcion = sequelize.define(alias, cols, config)


    return Funcion

}
