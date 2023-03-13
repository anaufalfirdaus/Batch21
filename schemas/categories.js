const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    cate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cate_name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cate_description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "cate_id_pk",
        unique: true,
        fields: [
          { name: "cate_id" },
        ]
      },
    ]
  });
};
