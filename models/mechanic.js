'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mechanic = sequelize.define('Mechanic', {
    shop: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Mechanic.associate = function(models) {
    // associations can be defined here
  };
  return Mechanic;
};