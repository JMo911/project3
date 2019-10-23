'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    lastName: DataTypes.STRING,
    caseNumber: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Ticket);
  };
  return User;
};