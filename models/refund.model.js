const Refund = sequelize.define(
    "Refund", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paymentMethod: {
            type: DataTypes.STRING,
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

module.exports = Refund