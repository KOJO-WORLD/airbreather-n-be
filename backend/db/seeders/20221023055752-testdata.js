'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Users /////////////////////////////////////////////////////
    await queryInterface.bulkInsert('Users', [
      {
        username: 'user1',
        email: 'user1@email.com',
        hashedPassword: 'password1',
        firstName: 'First',
        lastName: 'Name'
      },
      {
        username: 'user2',
        email: 'user2@email.com',
        hashedPassword: 'password2',
        firstName: 'Last',
        lastName: 'Name'
      }
    ]);

    // // Spots /////////////////////////////////////////////////////
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '123 address St',
        city: 'City1',
        state: 'State1',
        country: 'Country1',
        lat: 123.4,
        lng: 123.5,
        name: 'NAME1',
        description: 'This is spot #1',
        price: 100.00
      },
      {
        ownerId: 2,
        address: '456 address Ave',
        city: 'City2',
        state: 'State2',
        country: 'Country2',
        lat: 198.7654321,
        lng: -198.7654321,
        name: 'NAME2',
        description: 'This is spot #2',
        price: 100.00
      }
    ]);

    // // SpotImages //////////////////////////////////////////////////////
    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'spot1.com',
        preview: true
      },
      {
        spotId: 2,
        url: 'spot2.com',
        preview: true
      }]);

    // // Reviews //////////////////////////////////////////////////////
    await queryInterface.bulkInsert('Reviews', [
      {
        spotId: 1,
        userId: 1,
        review: 'review 1',
        stars: 1
      },
      {
        spotId: 1,
        userId: 2,
        review: 'review 2',
        stars: 5
      },
      {
        spotId: 2,
        userId: 1,
        review: 'review 3',
        stars: 2
      },
      {
        spotId: 2,
        userId: 2,
        review: 'review 4',
        stars: 3
      }
    ]);

    // // ReviewImages //////////////////////////////////////////////////////
    await queryInterface.bulkInsert('ReviewImages', [
      {
        reviewId: 1,
        url: 'review1.com',
      },
      {
        reviewId: 2,
        url: 'review2.com',
      },
      {
        reviewId: 3,
        url: 'review3.com',
      },
      {
        reviewId: 4,
        url: 'review4.com',
      }]);

    // // Bookings /////////////////////////////////////////////////////
    await queryInterface.bulkInsert('Bookings', [
      {
        spotId: 1,
        userId: 1,
        startDate: '2022-01-1',
        endDate: '2022-01-2'
      },
      {
        spotId: 1,
        userId: 2,
        startDate: '2022-01-3',
        endDate: '2022-01-4'
      },
      {
        spotId: 2,
        userId: 1,
        startDate: '2022-01-5',
        endDate: '2022-01-6'
      },
      {
        spotId: 2,
        userId: 2,
        startDate: '2022-01-7',
        endDate: '2022-01-8'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bookings', {});
    await queryInterface.bulkDelete('ReviewImages', {});
    await queryInterface.bulkDelete('Reviews', {});
    await queryInterface.bulkDelete('SpotImages', {});
    await queryInterface.bulkDelete('Spots', {});
    await queryInterface.bulkDelete('Users', {});
  }
};
