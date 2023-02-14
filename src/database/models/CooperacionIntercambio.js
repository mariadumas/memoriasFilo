module.exports = (sequelize, DataTypes) => {

    let alias = "CooperacionIntercambio"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        institucion_target: {
            type: DataTypes.STRING(255)
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        participante: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        desde: {
            type: DataTypes.INTEGER
        },
        hasta: {
            type: DataTypes.INTEGER
        },
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    };

    let config = {
        tableName: "relaciones_cooperacion_intercambio",
        timestamps: false
    }

    const CooperacionIntercambio = sequelize.define(alias, cols, config)

    CooperacionIntercambio.associate = (models) => {
        CooperacionIntercambio.belongsTo(models.Instituto, {
            as: "CooperacionIntercambioInstituto",
            foreignKey: "instituto_id"
        })
        CooperacionIntercambio.belongsTo(models.Integrante, {
            as: "CooperacionIntercambioIntegrante",
            foreignKey: "participante"
        })
    }


    return CooperacionIntercambio

}



