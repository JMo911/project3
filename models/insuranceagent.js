'use strict';
module.exports = (sequelize, DataTypes) => {
  const insuranceAgent = sequelize.define('insuranceAgent', {
    companyName: DataTypes.STRING,
    employeeID: DataTypes.INTEGER
  }, {});
  insuranceAgent.associate = function(models) {
    // associations can be defined here
  };
  return insuranceAgent;
};