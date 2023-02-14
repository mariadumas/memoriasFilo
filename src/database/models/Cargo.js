module.exports = (sequelize, DataTypes) => {
    
    let alias = "Cargo"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100)
        }, 
        institucion_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }

    };

    let config = {
        tablename: "cargo",
        timestamps: false
    }

    const Cargo = sequelize.define(alias, cols, config)


    return Cargo

}
