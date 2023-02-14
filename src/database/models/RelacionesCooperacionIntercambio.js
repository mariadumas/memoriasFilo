module.exports = (sequelize, DataTypes) => {

    let alias = "RelacionesCooperacionIntercambio"

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

    const RelacionesCooperacionIntercambio = sequelize.define(alias, cols, config)


    return RelacionesCooperacionIntercambio

}



