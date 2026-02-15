const { DataTypes } = require('sequelize');
const MainConnection = require("./config");

const Products = MainConnection.define(
  'Products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,        
    freezeTableName: true,    
  }
);

module.exports = Products;