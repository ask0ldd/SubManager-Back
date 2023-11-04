const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require('../config/database')

const User = sequelize.define(
    "Member", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalcode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
)

// User.sync()

/*
    lastname : 'schmo', 
    firstname : 'joe', 
    birthdate : '22/05/1975', 
    gender : 'M', 
    address1 : '127th baker street', 
    address2 : '', 
    city : 'london', 
    postalcode : '1256', 
    phone : '', 
    email : '', 
    mobile : '112233445566', 
    emergencyContactLastname : 'schmo', 
    emergencyContactFirstname : 'janine', 
    emergencyContactMobile : '665544332211',
*/

module.exports = Member