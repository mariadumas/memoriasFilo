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
        tableName: "linea_investigacion",
        timestamps: false
    }

    const LineaInvestigacion = sequelize.define(alias, cols, config)

    LineaInvestigacion.associate = (models) => {
        LineaInvestigacion.belongsToMany(models.Instituto, {
            through: "InstitutoHasLineaInvestigacion",
            foreignKey: "linea_investigacion_id",
            otherKey: "instituto_id",
            timestamps: false
        })
        LineaInvestigacion.hasMany(models.InstitutoHasLineaInvestigacion, {
            as: "lineaInvestigacionInstitutoHasLineaInvestigacion",
            foreignKey: "linea_investigacion_id"
        })
    }


    return LineaInvestigacion

}
