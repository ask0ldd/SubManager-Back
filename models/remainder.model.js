const Remainder = sequelize.define(
    "Remainder", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        amountOfWeeks: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        authorizedBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        uploadedDoc: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }
)

module.exports = Remainder