const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require('../config/database')

const Subscription = sequelize.define(
    "Subscription", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        activity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fees: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        startingDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }
)

const Activity = sequelize.define(
    "Activity", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
)

// sponsor
// activity

module.exports = {Subscription, Activity}

/*
    activity : 'golf',
    fees : '300',
    sponsor : 'joe schmo',
    startingDate : '22/05/1975', 
    endDate : '22/05/1975', 
*/