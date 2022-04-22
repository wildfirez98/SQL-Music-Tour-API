'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      event_id: {
        type: Sequelize.SMALLINT
      },
      band_id: {
        type: Sequelize.SMALLINT
      },
      meet_start_time: {
        type: Sequelize.DATE
      },
      meet_end_time: {
        type: Sequelize.DATE
      },
      meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};