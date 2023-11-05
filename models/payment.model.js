const Payment = sequelize.define(
    "Payment", {
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
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        subscriptionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        activityId: {
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

module.exports = Payment