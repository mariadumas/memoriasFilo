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
        }

    };

    let config = {
        tableName: "cargo",
        timestamps: false
    }

    const Cargo = sequelize.define(alias, cols, config)

    Cargo.associate = (models) => {
        Cargo.belongsToMany(models.Integrante, {
            through: "IntegranteHasCargo",
            foreignKey: "cargo_id",
            otherKey: "integrante_id",
            timestamps: false
        })
        Cargo.hasMany(models.IntegranteHasCargo, {
            foreignKey: "cargo_id"
        })
    }


    return Cargo

}
