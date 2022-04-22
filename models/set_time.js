'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_time.init({
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },  
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },  
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },  
    start_time:{
       type: DataTypes.DATE,
       allowNull: false
    },   
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },  
    set_time_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },  
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_time',
    timestamps: false
  });

  return Set_time;
};