const sequelize = require('./sequelize');
const Sequelize = require('sequelize')

const User = sequelize.define('users', {
    // attributes
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
  module.exports = User;