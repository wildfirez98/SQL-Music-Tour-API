'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('events', [{
       name: 'Music Event 1',
       date: '2022-08-07',
       start_time: '2022-06-22 19:10:25-07',
       end_time: '2022-06-22 22:10:25-07'
     },
       {
         name: 'Music Event 1',
         date: '2022-08-07',
         start_time: '2022-06-22 19:10:25-07',
         end_time: '2022-06-22 22:10:25-07'
       },
       {
         name: 'Music Event 1',
         date: '2022-08-07',
         start_time: '2022-06-22 19:10:25-07',
         end_time: '2022-06-22 22:10:25-07'
       },
       {
         name: 'Music Event 1',
         date: '2022-08-07',
         start_time: '2022-06-22 19:10:25-07',
         end_time: '2022-06-22 22:10:25-07'
       },
       {
         name: 'Music Event 1',
         date: '2022-08-07',
         start_time: '2022-06-22 19:10:25-07',
         end_time: '2022-06-22 22:10:25-07'
       },
       {
         name: 'Music Event 1',
         date: '2022-08-07',
         start_time: '2022-06-22 19:10:25-07',
         end_time: '2022-06-22 22:10:25-07'
       },
       {
         name: 'Music Event 1',
         date: '2022-08-07',
         start_time: '2022-06-22 19:10:25-07',
         end_time: '2022-06-22 22:10:25-07'
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
