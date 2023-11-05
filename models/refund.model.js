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
        paymentMethodId: {
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

const PaymentMethod = sequelize.define(
    "PaymentMethod", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
)

module.exports = {Refund, PaymentMethod}