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
      // 1
      {
        ownerId: 1,
        address: '123 address St',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United Sates',
        lat: 80.4,
        lng: 123.5,
        name: 'Beverly Hills Maison',
        description: 'Inspired by the French countryside, \
        this Beverly Hills residence exudes the ideal mix \
        of modernity and charm. Canyon landscapes undulate \
        beyond the soaring windows; inside, the home is \
        drenched in natural light. Slip into the zero-edge \
        pool whenever you need an instant refresh. Trees \
        cast dappled shadows on the lavish yard. Access to \
        shopping, sights, and restaurants are mere minutes away by car.',
        price: 900.00
      },
      // 2
      {
        ownerId: 2,
        address: '456 address Ave',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 40.7654321,
        lng: 58.7654321,
        name: 'Martel Villa',
        description: 'Welcome to this amazing Smart Modern \
        resort feel home walking distance to Melrose \
        shopping, with 5bedrooms 6.5 baths, Extra beds \
        can be added including a master bedroom a great \
        sized private balcony & a luxurious master bath \
        with a soaking tub. Open floor plan with an \
        indoor/outdoor living space',
        price: 899.00
      },
      // 3
      {
        ownerId: 3,
        address: '789 address Blvd',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 50.7654321,
        lng: -70.7654321,
        name: 'Private LA Guesthouse',
        description: 'Feel at ease at this peaceful \
        getaway under the California sun, surrounded \
        by a Mediterranean Garden set back on a serene \
        private lot. This Beautifully Appointed Modern \
        Guest House is a detached standalone structure \
        set back from the main family residence on a \
        gated secure lot with a dedicated off-street \
        guest parking space.',
        price: 880.00
      },
      // 4
      {
        ownerId: 1,
        address: '987 address Cir',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 40.7654321,
        lng: -60.7654321,
        name: 'Celeb Favorite Mulholland Estate',
        description: 'This is the house of your dreams \
        with views of Los Angeles from both sides. \
        Included in the house is a gym, high powered \
        steam room, double driveways, and the perfect \
        infinity pool. Our spacious outdoor area also \
        has a BBQ station, dining table, and modern \
        fireplaces. If your looking for style and \
        comfort you are gonna want to stay here. We \
        offer WIFI, indoor and outdoors TV with all \
        your favorite streaming services.',
        price: 950.00
      },
      // 5
      {
        ownerId: 2,
        address: '654 Palace St',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United States',
        lat: 50.7654321,
        lng: -70.7634321,
        name: 'Hillcrest',
        description: "Over 3 acres of land affords \
        unrivaled privacy and luxury. Behind tall \
        gates lies an elegant, winding driveway \
        which leads guests through the park-like \
        grounds, past guest and staff houses to the \
        main residence, which sits majestically in \
        the middle of the property over-looking the \
        exquisitely manicured grounds, oversized \
        pool, pool house and tennis court. The \
        house itself has been restored to perfection \
        whilst remaining sympathetic to the era in \
        which it was built, using rich, exotic stones \
        throughout, a range of original millwork and \
        exceptional furnishings and objects d’art.",
        price: 990.00
      },
      // 6
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Mission Viejo',
        state: 'California',
        country: 'United States',
        lat: 44.7654321,
        lng: -76.7634321,
        name: 'Posada CA',
        description: "Welcome to your so cal dream \
        vacation! Just 20 minutes down the freeway \
        from Disneyland and VERY close to several \
        beach communities (Dana Point, Laguna Beach,\
        San Clemente, just to name a few). This \
        house is set up for friend groups or \
        families traveling together. Everyone \
        will find their own personal space on \
        site to hang out, almost always with a \
        view! The back yard is equipped with a \
        pool, firepit, and BBQ. Inside you will \
        find a cozy den, living room, dining room, \
        and 4 large bedrooms.",
        price: 890.00
      },
      // 7
      {
        ownerId: 2,
        address: '322 Palace Ave',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United States',
        lat: 40.7654321,
        lng: -70.7634321,
        name: 'Modern Beverly Hills Jewel',
        description: "Nestled atop a lush hillside \
        in the coveted Beverly Hills area, The \
        Residence is a quiet nature retreat for \
        the discerning traveler. There are three \
        floors and over 4800 square feet of indoor \
        living space, plus a beautiful outdoor \
        space with a private pool, spa, and \
        breathtaking views of the city below.",
        price: 990.00
      },
      // 8
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 41.7654321,
        lng: -71.7634321,
        name: 'Beautiful Mansion',
        description: "This custom built 5947 sq. ft home \
        sits in the heart of Ladera Heights. Centrally \
        located within miles of Hollywood, LAX, & \
        downtown LA, this spacious home is a perfect fit \
        for family vacations! Includes an outdoor grill \
        and large jet spa jacuzzi.",
        price: 997.00
      },
      // 9
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 42.7654321,
        lng: -72.7634321,
        name: 'Luxury Modern Hollywood Hills Villa',
        description: "Rustic terracotta tile warms bare \
        feet while city lights twinkle below this little \
        piece of Tuscany in Los Feliz. Wrought iron and \
        arched windows trip across the hillside, as does \
        an infinity pool, while inside, a games room, \
        bowling alley, and private movie theater invite \
        all ages to play. The Hollywood Hills setting \
        means it’s minutes to hiking trails and views \
        of the Hollywood sign.",
        price: 899.00
      },
      // 10
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Whittier',
        state: 'California',
        country: 'United States',
        lat: 43.7654321,
        lng: -73.7634321,
        name: 'Near Disneyland with Pool',
        description: "The whole group will enjoy easy \
        access to everything from this centrally located place.",
        price: 945.00
      },
      // 11
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 40.8654321,
        lng: -74.7634321,
        name: 'Modern Villa with Unmatched Skyline Views',
        description: "Perched just off Mulholland Drive \
        in the Hollywood Hills, this ultra-luxurious \
        five-bedroom boasts incredible city-views and \
        an unbeatable location for exploring the countless \
        attractions of greater Los Angeles. From Rouge \
        Elite’s spacious balcony, you’ll be able to see \
        from the valley, on to the Hollywood sign, and \
        all the way to Catalina. Rouge Elite has total \
        accommodations for ten and plenty of open space, \
        making it perfect for a family vacation or group \
        getaway with friends.",
        price: 880.00
      },
      // 12
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United States',
        lat: 45.7654321,
        lng: -75.7634321,
        name: 'Modern view',
        description: "Embrace the quintessential Los Angeles \
        lifestyle at this modern mansion nestled into coveted \
        Beverly Hills. Floor-to-ceiling windows effortlessly \
        open to the manicured terrace. After dark, the city \
        glitters like a galaxy of its own beyond the backyard. \
        Work up a sweat on winding canyon trails before coming \
        home to plunge in the pool. Boutiques, famous hotels, \
        and cafés await on the Sunset Strip.",
        price: 910.00
      },
      // 13
      {
        ownerId: 1,
        address: '123 address St',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United Sates',
        lat: 80.4,
        lng: 123.5,
        name: 'Beverly Hills Maison',
        description: 'Inspired by the French countryside, \
          this Beverly Hills residence exudes the ideal mix \
          of modernity and charm. Canyon landscapes undulate \
          beyond the soaring windows; inside, the home is \
          drenched in natural light. Slip into the zero-edge \
          pool whenever you need an instant refresh. Trees \
          cast dappled shadows on the lavish yard. Access to \
          shopping, sights, and restaurants are mere minutes away by car.',
        price: 994.00
      },
      // 14
      {
        ownerId: 2,
        address: '456 address Ave',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United States',
        lat: 40.7654321,
        lng: 58.7654321,
        name: 'Briarcrest Estate',
        description: 'Candlelight flickers in the pool house \
        as the sun sets outside this sparkling white masterpiece \
        in coveted Beverly Hills. Walk the polished floors past \
        modern art and walls of glass to a broad pool terrace \
        and glass-walled river rock fire pit to take in the \
        panorama. High-gloss finishes from marble and mirrors to \
        a back-lit bar in the home theater show off iconic LA \
        glam. Fryman Canyon Park is a mile away.',
        price: 899.00
      },
      // 15
      {
        ownerId: 3,
        address: '789 address Blvd',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United States',
        lat: 50.7654321,
        lng: -70.7654321,
        name: 'Trousdale Grand',
        description: "This stunning villa undoubtedly presents \
        the best views in all of Beverly Hills. This beautifully \
        remodeled, single-story estate plateaus' and is angled in \
        one of the best spots in the city. Views stretch from \
        downtown Los Angeles, over to Century City, and passed \
        Catalina Island. There are floor to ceiling glass French \
        doors throughout much of the house inviting plenty of \
        natural light and lending the perfect indoor outdoor flow.",
        price: 880.00
      },
      // 16
      {
        ownerId: 1,
        address: '987 address Cir',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United States',
        lat: 40.7654321,
        lng: -60.7654321,
        name: 'Beverly Hills Allure',
        description: "The winding roads of Beverly Hills conceal \
        many hidden jewels, but there are few as resplendent as \
        the Allure Estate. This breathtaking Beverly Hills villa \
        for rent is situated on a cul-de-sac near Sunset Boulevard, \
        only a short drive from the fabled nightlife of West \
        Hollywood’s Sunset Strip. Designed in the style of a \
        French country estate, the home sits on 11,000 square \
        feet of world class landscaped grounds. Luminous interiors, \
        outstanding amenities for relaxation and play, and \
        accommodations for sixteen guests form a superb private \
        haven for family reunions and special occasions with \
        friends in one of the most highly coveted areas of Los Angeles.",
        price: 950.00
      },
      // 17
      {
        ownerId: 2,
        address: '654 Palace St',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 50.7654321,
        lng: -70.7634321,
        name: 'Lilypool',
        description: "Amid lush, coastal flora of the \
        Hollywood Hills, above the world-famous Sunset \
        Strip, you’ll find Lilypool, a picturesque three \
        bedroom villa ideal for couples or families. \
        You’ll enjoy a tranquil, private setting provided \
        by the surrounding hills and plants, in a \
        neighborhood filled with Hollywood stars.",
        price: 990.00
      },
      // 18
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Beverly Hills',
        state: 'California',
        country: 'United States',
        lat: 44.7654321,
        lng: -76.7634321,
        name: 'Pool & Jacuzzi Beverlywood',
        description: "Come stay in this very well \
        located, very spacious & bright, large \
        2 bedroom + detached third bedroom home. \
        Located in A+ area Beverlywood adjacent, \
        this house can sleep up to 6 guests \
        comfortably and includes amenities such \
        as Hot Tub, Pool, Internet, Wifi TV, \
        Washer Dryer, and fenced garden area. \
        We are only 5 minutes to Rodeo Dr. & \
        very central to all sightseeing Los \
        Angeles has to offer.",
        price: 890.00
      },
      // 19
      {
        ownerId: 2,
        address: '322 Palace Ave',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 40.7654321,
        lng: -70.7634321,
        name: 'Stunning Mediterranian with pool, spa, bbq, gym.',
        description: "Incredible 5 bedroom 3 bath \
        Mediterranean/Spanish style home featuring \
        a private lush entertainers back yard with \
        beautiful pool, spa, outdoor dining, bar, \
        barbecue, and a mini gym/yoga room. The \
        interior has a fully stocked chefs kitchen, \
        2 gas fireplaces, multiple large TVs, \
        family game area, stylish and comfortable \
        bedrooms with large closets, and a jacuzzi \
        tub in the primary bath. This home is \
        located in Valley Village, central to \
        many tourist hot spots.",
        price: 995.00
      },
      // 20
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 41.7654321,
        lng: -71.7634321,
        name: 'SoCal Pool House',
        description: "An art inspired LA vibe house, \
        centrally located in a Southern California \
        residential area. 10 mins to Airport(LAX), \
        18 mins to Downtown LA, 10 mins to Forum, \
        15 mins to beaches (Manhattan & Marina DelRey). \
        30 mins to Disneyland. Fully furnished, \
        equipped kitchen, smart TV, hotel-grade beds.",
        price: 967.00
      },
      // 21
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 42.7654321,
        lng: -72.7634321,
        name: 'Pool House Oasis',
        description: "This newer 3 bed/2bath duplex style \
        home is centrally located between Venice & Marina \
        Del Rey. Walking distance to local restaurants, \
        markets, shops, and bars and less than 2 miles to \
        the beach. The backyard pool and spa is exclusively \
        for your use.",
        price: 970.00
      },
      // 22
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Pasadena',
        state: 'California',
        country: 'United States',
        lat: 43.7654321,
        lng: -73.7634321,
        name: ' Private house in historic area- Pasadena',
        description: "This beautiful new private house \
        is located in a quiet, historic, and safe \
        neighborhood minutes from Oldtown, Rose bowl, \
        PCC, CalTech, Rests, Shops, Metro and a great \
        central location to UnivStudio, Disnland, \
        LA Live, and Hollywood. Guests have access \
        to the entire private house in front of pool \
        with 1 BdR and 1 BthR(w/ a/c/heater), kitchen \
        and TV room (port. ac). Guests also have \
        additional shared outdoor pool areas \
        lounge/tent/table and bb court. Guests are \
        not allowed to use pool/spa.",
        price: 875.00
      },
      // 23
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Marina Del Rey',
        state: 'California',
        country: 'United States',
        lat: 40.8654321,
        lng: -74.7634321,
        name: 'Spacious 2 Bedroom w/ Pool View',
        description: "Our community is a unique property \
        unlike any in Los Angeles. It is a resort-style \
        oasis close to the Marina and just a few blocks \
        from the ocean, Venice Boardwalk and all the fun. \
        With high-end amenities everything here supports \
        happiness, relaxing, walking, biking, or any of \
        the nearby ocean activities.",
        price: 980.00
      },
      // 24
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 45.7654321,
        lng: -75.7634321,
        name: 'Luxury House with pool',
        description: "This luxury mansion puts you right \
        in the heart of Sherman Oaks— nestled between \
        Beverly Hills and the Hollywood Studio City. \
        Designed to impress, every corner of this upscale \
        retreat features polished finishes, high-end \
        amenities, and breathtaking design. The grounds \
        include a private pool, hot tub, and a luxe fire \
        pit You'll find dozens of lounge areas next to \
        the water and a fully-equipped outdoor kitchen \
        to make al fresco meals a breeze.",
        price: 978.00
      },
      // 25
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Mission Viejo',
        state: 'California',
        country: 'Redondo Beach',
        lat: 43.7654321,
        lng: -73.7634321,
        name: 'Casa Verde',
        description: "Welcome to Casa Verde, where \
        you can enjoy resort-style living in our \
        newly built, 3,900sf home! This one of a \
        kind retreat is perfect for a large family \
        with 4 bedrooms and 6 bath in the main house \
        (all en suite private bathrooms) plus 1 queen \
        bed and 1 bathroom in the spacious 600sf guest \
        house with full kitchen, family room and sofa sleeper.",
        price: 987.00
      },
      // 26
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Costa Mesa',
        state: 'California',
        country: 'United States',
        lat: 40.8654321,
        lng: -74.7634321,
        name: 'Fully Loaded Newport Beach Studio',
        description: "Modern cozy living that opens up \
        to a firepit and newly installed pool. Comes \
        with many upgraded amenities. Back house \
        studio is located in owners' private \
        backyard featuring pool, spa, BBQ, \
        firepit, fireplace and all the amenities. \
        Located in Newport Heights neighborhood, \
        minutes away from The Triangle and a bike \
        ride from the beach. 2 Beach Cruisers inc!",
        price: 899.00
      },
      // 27
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Burbank',
        state: 'California',
        country: 'United States',
        lat: 45.7654321,
        lng: -75.7634321,
        name: '5 bedroom villa Bessemer st',
        description: "Stylish I hand home with a pool \
        and Jacuzzi very spacious for a large group \
        large kitchen in a central area close to all \
        main attraction in Los Angeles include a car \
        charging station in a 6 parking area",
        price: 990.00
      },
      // 28
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Fullerton',
        state: 'California',
        country: 'United States',
        lat: 45.7654321,
        lng: -75.7634321,
        name: 'Resort Style',
        description: "Welcome to Enliven Club Resort! \
        We have carefully curated this Oasis so you and \
        your loved ones won’t have to leave the property. \
        We have everything you need from entertainment \
        amenities to resort style luxury bedrooms and \
        bathrooms. Enliven Club Resort is in the heart \
        of OC and is only minutes away from all major \
        attractions such as Disneyland, Knotts, Honda \
        and Convention Center, Beaches, Medieval Times, \
        Downtown Fullerton & more!",
        price: 879.00
      },
      // 29
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Pomona',
        state: 'California',
        country: 'United States',
        lat: 45.7654321,
        lng: -75.7634321,
        name: 'Newly Remodeled Philips Ranch vacation home',
        description: "Beautifully remodeled & decorated \
        vacation home. Featuring outdoor pool and spacious \
        outdoor dining area. Multiple lounging areas with \
        4 bedrooms, 3 full bathrooms and functional working \
        spaces. Peaceful neighborhood, surrounded by local \
        shops and restaurants. Only 12 miles from Ontario \
        International Airport and convention center. 21 \
        miles from Disneyland. 9 miles from Chino Hills \
        state park with lots of hiking trails. 2000sqft \
        of living space provides plenty of space for the \
        whole family",
        price: 960.00
      },
      // 30
      {
        ownerId: 2,
        address: '321 Palace Ave',
        city: 'Pomona',
        state: 'California',
        country: 'United States',
        lat: 45.7654321,
        lng: -75.7634321,
        name: 'Los Angeles Adventure',
        description: "We have a private pool, hot tub, \
        pool table and an 85 inch smart TV. We are a \
        short drive from Disneyland , knotts Berry Farm \
        and Raging Waters. When your not relaxing at \
        home we have a nice nearby hiking trail.",
        price: 997.00
      }
    ]);

    // // SpotImages //////////////////////////////////////////////////////

    options.tableName = 'SpotImages';

    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690913073/AirBreathe%27n%27Be/Spots/24cc494b-eb24-48ab-97e4-decdd052d590_wklu1z.webp',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690913460/AirBreathe%27n%27Be/Spots/0d58f4c9-6ae2-430b-a1a3-9ab2b7b9f6e3_fwutlu.webp',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690913712/AirBreathe%27n%27Be/Spots/d92167a4-6bdc-484e-8bc8-14f052b7c4e3_cpmakv.webp',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690913778/AirBreathe%27n%27Be/Spots/1bb7152f-a33d-4259-bbab-876a1a95e7e2_d2i4fl.webp',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690913832/AirBreathe%27n%27Be/Spots/a430a29a-48f8-433e-a9d1-24c30c82572e_stvpi1.webp',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690913878/AirBreathe%27n%27Be/Spots/5d2b7512-5554-4dd7-8304-c533e9294120_lwguik.webp',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690913926/AirBreathe%27n%27Be/Spots/6bd407ac-4bf3-48e0-b8fc-2110283dbe51_gqjaaw.webp',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690914007/AirBreathe%27n%27Be/Spots/3990d585-7305-42b7-a50a-33d4c3a2f291_bedoks.webp',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690914062/AirBreathe%27n%27Be/Spots/eb1516c6-06ad-45ea-9132-bf55269d95a1_qgf115.webp',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690914164/AirBreathe%27n%27Be/Spots/d54a967d-da04-4b4a-9ef3-81e6553296d5_v3d1wy.webp',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690914249/AirBreathe%27n%27Be/Spots/5ed29802-44b4-42cb-b452-870a2892df73_ivaw64.webp',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691013249/AirBreathe%27n%27Be/Spots/f84382ec-95e5-4e57-a5b6-238e9e8b44eb_khzsik.webp',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690914372/AirBreathe%27n%27Be/Spots/4fbb5665-0f5c-4e8e-a026-8f664d722673_nxvatx.webp',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690914940/AirBreathe%27n%27Be/Spots/f47f2a99-5501-4af6-97cc-6893e0c3d411_ejppv9.webp',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915092/AirBreathe%27n%27Be/Spots/a4f996ee-aefa-4960-aea2-870d8f11332e_st6gn8.webp',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690916219/AirBreathe%27n%27Be/Spots/e4256fd6-bd85-43a5-afd9-2ed11736f7d3_mdusxb.webp',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915157/AirBreathe%27n%27Be/Spots/8e6002c0-81e7-47de-94e8-7bb4cf66d046_qpq2ur.webp',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915209/AirBreathe%27n%27Be/Spots/33036354-1a60-4834-a9ff-164f69a103cc_kfmdq6.webp',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915269/AirBreathe%27n%27Be/Spots/a9e7ac00-9f00-4a82-80a3-1f61ca31ac3b_lyrjkw.webp',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915312/AirBreathe%27n%27Be/Spots/0922b66a-8277-4e83-add4-ebc31607b84a_vz12zf.webp',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915366/AirBreathe%27n%27Be/Spots/23ba9bf7-1107-4a9f-a37d-ae2db2d2f355_rw3mek.webp',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915766/AirBreathe%27n%27Be/Spots/fdcdbd29-c33d-47d6-a4ac-2f3a296fb36d_hsoylb.webp',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915819/AirBreathe%27n%27Be/Spots/79138aeb-70d2-4a52-8e61-8a3c292c7575_jvcil3.webp',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915873/AirBreathe%27n%27Be/Spots/c8f8135e_original_gutyxl.webp',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690915967/AirBreathe%27n%27Be/Spots/6840c200-3240-435b-9672-7468cb4876b4_o32k6s.webp',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690916014/AirBreathe%27n%27Be/Spots/491c57d7-cb5a-43da-bac5-8aa34f47fd0a_o6hdgy.webp',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690916082/AirBreathe%27n%27Be/Spots/0c5420e0-e208-46d5-9dc8-514cdff27e28_kicu98.webp',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690916139/AirBreathe%27n%27Be/Spots/7eb87187-90e9-4056-b786-0f61d8c8c052_axewpd.webp',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690916180/AirBreathe%27n%27Be/Spots/1ef2e40f-1139-4da5-bae1-07539b8f91f3_k1msho.webp',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1690916219/AirBreathe%27n%27Be/Spots/e4256fd6-bd85-43a5-afd9-2ed11736f7d3_mdusxb.webp',
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
        url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1675402514/AirBreathe%27n%27Be/reviewImages/360_F_342851651_BV9SYWnoTPSu3kq6e82zG7H8eEt20wd1_nda74b.jpg',
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
