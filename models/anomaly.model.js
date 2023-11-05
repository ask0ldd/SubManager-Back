const Alert = sequelize.define(
    "Alert", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activeFrom: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        activeUntil: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }
)

module.exports = Alert