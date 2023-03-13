const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regions1', {
    region_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    region_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'regions1',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "region_pk",
        unique: true,
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
