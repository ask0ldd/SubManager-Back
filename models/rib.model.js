const RIB = sequelize.define(
    "RIB", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        iban: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bank: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
)

module.exports = RIB