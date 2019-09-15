const sequelize = require('./sequelize');
const Sequelize = require('sequelize')

const User = sequelize.define('user', {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    // options
  });
  module.exports = User;