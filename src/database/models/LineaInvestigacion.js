module.exports = (sequelize, DataTypes) => {
    
    let alias = "LineaInvestigacion"

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
        tablename: "linea_investigacion",
        timestamps: false
    }

    const LineaInvestigacion = sequelize.define(alias, cols, config)


    return LineaInvestigacion

}
