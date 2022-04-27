'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     return queryInterface.bulkInsert('meet_greets', [{
        meet_start_time: '2022-06-22 19:10:25-07',
        meet_end_time: '2022-06-22 22:10:25-07'
      }, {
         meet_start_time: '2022-07-22 19:10:25-07',
         meet_end_time: '2022-07-22 22:10:25-07'
      }, {
         meet_start_time: '2022-08-22 19:10:25-07',
         meet_end_time: '2022-08-22 22:10:25-07'
      }, {
         meet_start_time: '2022-09-22 19:10:25-07',
         meet_end_time: '2022-09-22 22:10:25-07'
      }, {
         meet_start_time: '2022-04-22 19:10:25-07',
         meet_end_time: '2022-04-22 22:10:25-07'
      }, {
         meet_start_time: '2022-08-22 19:10:25-07',
         meet_end_time: '2022-08-22 22:10:25-07'
      }, {
         meet_start_time: '2022-09-22 19:10:25-07',
         meet_end_time: '2022-09-22 22:10:25-07'
      }, {
         meet_start_time: '2022-10-22 19:10:25-07',
         meet_end_time: '2022-10-22 22:10:25-07'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
