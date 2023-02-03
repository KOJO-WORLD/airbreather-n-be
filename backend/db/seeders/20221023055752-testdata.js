'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

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

    options.tableName = 'Users';

    await queryInterface.bulkInsert(options, [
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
      },
      {
        username: 'Demo-licious',
        email: 'demo1@demail.com',
        hashedPassword: 'password',
        firstName: 'Demo',
        lastName: 'Usah'
      }
    ]);

    // // Spots /////////////////////////////////////////////////////

    options.tableName = 'Spots';

    await queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '123 address St',
        city: 'Olde Towne',
        state: 'California',
        country: 'United Sates',
        lat: 80.4,
        lng: 123.5,
        name: 'Golden Glory',
        description: 'Your dream getaway begins here',
        price: 180.00
      },
      {
        ownerId: 2,
        address: '456 address Ave',
        city: 'New Towne',
        state: 'California',
        country: 'United States',
        lat: 40.7654321,
        lng: 58.7654321,
        name: 'Shanty Town',
        description: 'The perfect little spot',
        price: 140.00
      },
      {
        ownerId: 3,
        address: '789 address Blvd',
        city: 'Twin Peaks',
        state: 'California',
        country: 'United States',
        lat: 50.7654321,
        lng: -70.7654321,
        name: 'Red Room',
        description: 'Are you Laura Palmer?',
        price: 550.00
      },
      {
        ownerId: 1,
        address: '987 address Cir',
        city: 'Who-Towne',
        state: 'California',
        country: 'United States',
        lat: 40.7654321,
        lng: -60.7654321,
        name: 'Who Hill',
        description: 'Owls live here',
        price: 200.00
      },
      {
        ownerId: 2,
        address: '654 Palace St',
        city: 'San Bernardino',
        state: 'California',
        country: 'United States',
        lat: 50.7654321,
        lng: -70.7634321,
        name: 'Hot Hill',
        description: "It's really hot here but you can pay to stay here",
        price: 5.00
      },
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Saint Bernardo',
        state: 'California',
        country: 'United States',
        lat: 44.7654321,
        lng: -76.7634321,
        name: 'Pupper Palace',
        description: "WUUF, you'll love it here! :)",
        price: 135.00
      }
    ]);

    // // SpotImages //////////////////////////////////////////////////////

    options.tableName = 'SpotImages';

    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://www.truenorthloghomes.com/wp-content/uploads/2018/03/Front2-min-300x300.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://www.marylmartin.com/wp-content/uploads/2016/10/0000516535-300x300.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/a-red-background-texture-that-looks-like-a-silky_BtyxPTBCrs_thumb.jpg',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://i.etsystatic.com/21784082/r/il/5a4371/2761320438/il_300x300.2761320438_b42k.jpg',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/3/2-abandoned-car-wrecks-in-solitaire-located-in-the-namib-desert-of-namibia-miroslav-liska.jpg',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://blythewoodworks.com/wp-content/uploads/2018/09/Brittany-Michelles-pup-and-his-Goliath-dog-house.jpg',
        preview: true
      },
    ]);

    // // Reviews //////////////////////////////////////////////////////

    options.tableName = 'Reviews';

    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 3,
        review: 'amazing',
        stars: 5
      },
      {
        spotId: 1,
        userId: 2,
        review: 'very golden',
        stars: 5
      },
      {
        spotId: 1,
        userId: 3,
        review: 'a little too golden',
        stars: 3
      },
      {
        spotId: 2,
        userId: 1,
        review: 'very gross, we loved it',
        stars: 5
      },
      {
        spotId: 2,
        userId: 2,
        review: 'no',
        stars: 1
      },
      {
        spotId: 3,
        userId: 1,
        review: 'Are you Laura Palmer?',
        stars: 4
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Are you Laura Palmer?',
        stars: 3
      },
      {
        spotId: 3,
        userId: 3,
        review: 'Are you Laura Palmer?',
        stars: 1
      },
      {
        spotId: 4,
        userId: 1,
        review: 'I can turn my head 180 degrees lol',
        stars: 3
      },
      {
        spotId: 4,
        userId: 3,
        review: "WHO wouldn't want to stay here?",
        stars: 5
      },
      {
        spotId: 5,
        userId: 2,
        review: "Spent the best week of my life here. If you see this, I love you Spencer",
        stars: 5
      },
      {
        spotId: 6,
        userId: 1,
        review: 'Great place to ruff house',
        stars: 4
      }
    ]);

    // // ReviewImages //////////////////////////////////////////////////////

    options.tableName = 'ReviewImages';

    await queryInterface.bulkInsert(options, [
      {
        reviewId: 1,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1675393465/AirBreathe%27n%27Be/reviewImages/attractive-elderly-man-taking-a-selfie-thumb-up-everything-is-cool-free-photo_bljokg.jpg',
      },
      {
        reviewId: 2,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1675393293/AirBreathe%27n%27Be/reviewImages/depositphotos_32568703-stock-photo-keep-up-the-great-work_qlffjt.webp',
      },
      {
        reviewId: 3,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1675393293/AirBreathe%27n%27Be/reviewImages/397-3977706_3-istock-man-with-thumbs-up-png_ewldne.jpg',
      },
      {
        reviewId: 4,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1675393293/AirBreathe%27n%27Be/reviewImages/person-2385787_1280_bvd88e.jpg',
      }]);

    // // Bookings /////////////////////////////////////////////////////

    options.tableName = 'Bookings';

    await queryInterface.bulkInsert(options, [
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
    options.tableName = 'Bookings';
    await queryInterface.bulkDelete(options);
    options.tableName = 'ReviewImages';
    await queryInterface.bulkDelete(options);
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options);
    options.tableName = 'SpotImages';
    await queryInterface.bulkDelete(options);
    options.tableName = 'Spots';
    await queryInterface.bulkDelete(options);
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options);
  }
};
