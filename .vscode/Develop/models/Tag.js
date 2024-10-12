const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Import the Product model
const Product = require('./Product'); // Adjust the path as necessary

class Tag extends Model { }

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Define associations with other tables
Tag.belongsToMany(Product, { through: 'product_tag' });

module.exports = Tag;
