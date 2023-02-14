module.exports = (sequelize, DataTypes) => {
    
    let alias = "OrganoRepresentativo"

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(60)
        }, 
        fecha_conformacion: {
            type: DataTypes.DATEONLY
        },
        fecha_conformacion: {
            type: DataTypes.DATEONLY
        },
        actividad: {
            type: DataTypes.TEXT
        }, 
        instituto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false

        }

    };

    let config = {
        tablename: "organo_representativo",
        timestamps: false
    }

    const OrganoRepresentativo = sequelize.define(alias, cols, config)


    return OrganoRepresentativo

}
