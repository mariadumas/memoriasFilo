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
        tableName: "funcion",
        timestamps: false
    }

    const Funcion = sequelize.define(alias, cols, config)

    Funcion.associate = (models) => {
        Funcion.hasMany(models.Integrante, {
            as: "funcionIntegrante",
            foreignKey: "funcion_id"
        })
    }


    return Funcion

}
