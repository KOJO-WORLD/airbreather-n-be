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
        lastName: 'Licious'
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
        ownerId: 3,
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
        ownerId: 4,
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
        ownerId: 5,
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
        ownerId: 6,
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
        ownerId: 1,
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
        ownerId: 3,
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
        ownerId: 4,
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
        ownerId: 5,
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
        ownerId: 6,
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
        ownerId: 3,
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
        ownerId: 4,
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
        ownerId: 5,
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
        ownerId: 6,
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
        ownerId: 1,
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
        ownerId: 3,
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
        ownerId: 4,
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
        ownerId: 5,
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
        ownerId: 6,
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
        ownerId: 1,
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
        ownerId: 3,
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
      // Spot 1
      {
        spotId: 1,
        userId: 2,
        review: "This was my 2nd time staying at this house and it was just as great as the first time. My kids love staying here and having the beach as our backyard. The host is very responsive to any issues or questions. We hope to be back soon!",
        stars: 5
      },
      {
        spotId: 1,
        userId: 3,
        review: "We had an amazing vacation at this spot! The view was incredible, and the house had everything we needed. The host was friendly and provided excellent service. Highly recommended!",
        stars: 5
      },
      {
        spotId: 1,
        userId: 5,
        review: "The house was perfect and exactly what we were hoping for. The host was very accommodating and made sure we had a comfortable stay. The beachfront location was a bonus. We'll definitely return!",
        stars: 5
      },
      {
        spotId: 1,
        userId: 6,
        review: "Such a cozy spot with stunning ocean views! The host was very welcoming and made sure we had everything we needed. We enjoyed our stay and will come back for sure.",
        stars: 4
      },
      {
        spotId: 1,
        userId: 2,
        review: "Had a great time at this spot! The house was clean and spacious, and the host was very helpful with local recommendations. Would definitely recommend to others.",
        stars: 4
      },
      {
        spotId: 1,
        userId: 3,
        review: "Our stay at this spot was fantastic! The place was beautifully decorated and had all the comforts of home. The owner was friendly and provided great local tips. We had a wonderful time and would book again without hesitation.",
        stars: 5
      },
      {
        spotId: 1,
        userId: 5,
        review: "Great spot with stunning views! The house was spacious and clean. The host was very helpful and responsive to our questions. We had an unforgettable vacation here.",
        stars: 5
      },
      {
        spotId: 1,
        userId: 4,
        review: "We had an unforgettable stay at this spot. The host was very friendly and attentive to our needs. The house was clean and comfortable. The beach access was a huge plus!",
        stars: 5
      },
      {
        spotId: 1,
        userId: 5,
        review: "A perfect beachfront retreat! The house was well-appointed and had everything we needed. The host was fantastic and provided great recommendations for local activities.",
        stars: 5
      },

      // Spot 2
      {
        spotId: 2,
        userId: 1,
        review: "This home was spectacular and absolutely lived up to the description. It was pristinely clean, had all the amenities someone could hope for. The views from every floor of the home were breathtaking, leaving you in constant awe. Tommy was an amazing host and went above and beyond to ensure our stay was spectacular. We will absolutely be back. This location, home, and host are at the top of our all-time favorite stays.",
        stars: 5
      },
      {
        spotId: 2,
        userId: 3,
        review: "Our stay at this spot was fantastic! The place was beautifully decorated and had all the comforts of home. The owner was friendly and provided great local tips. We had a wonderful time and would book again without hesitation.",
        stars: 5
      },
      {
        spotId: 2,
        userId: 5,
        review: "Great spot with stunning views! The house was spacious and clean. The host was very helpful and responsive to our questions. We had an unforgettable vacation here.",
        stars: 5
      },
      // Spot 3
      {
        spotId: 3,
        userId: 1,
        review: "Amazing location and amenities. Hosts were very helpful and accommodating. Just an overall wonderful experience.",
        stars: 4
      },
      {
        spotId: 3,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was lovely and had everything we needed. The owner was friendly and made us feel welcome. The location was perfect for exploring the area.",
        stars: 5
      },
      {
        spotId: 3,
        userId: 6,
        review: "The spot was even better than we expected. The host was very attentive and made sure we had a comfortable stay. The views were stunning, and we had a great time relaxing by the pool.",
        stars: 5
      },
      // Spot 4
      {
        spotId: 4,
        userId: 1,
        review: "We had a wonderful time at this spot. The host was friendly and accommodating. The house was clean and cozy. The location was excellent for exploring the nearby attractions.",
        stars: 4
      },
      {
        spotId: 4,
        userId: 2,
        review: "Beautiful property with stunning views! The host was attentive and made sure we had a comfortable stay. We enjoyed every moment and would love to visit again.",
        stars: 5
      },
      {
        spotId: 4,
        userId: 3,
        review: "We loved our stay at this spot. The house had a great layout and everything we needed. The owner was very helpful and provided excellent service.",
        stars: 5
      },
      {
        spotId: 4,
        userId: 5,
        review: "The spot was perfect for a relaxing getaway. The host was very accommodating and made us feel welcome. The amenities were top-notch.",
        stars: 5
      },
      {
        spotId: 4,
        userId: 6,
        review: "We had a fantastic time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 4,
        userId: 4,
        review: "This spot was perfect for a family vacation. The host was great, and the house had everything we needed. The pool area was our favorite spot to relax!",
        stars: 5
      },
      {
        spotId: 4,
        userId: 2,
        review: "We had a great stay at this spot. The house was comfortable and had stunning views. The host was accommodating and provided excellent recommendations.",
        stars: 4
      },
      // Spot 5
      {
        spotId: 5,
        userId: 1,
        review: "What an amazing spot! The house was beautifully decorated and had everything we needed. The host was very helpful and made sure we had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 5,
        userId: 3,
        review: "We loved our time at this spot. The host was attentive and made us feel at home. The location was perfect for exploring the nearby attractions.",
        stars: 5
      },
      {
        spotId: 5,
        userId: 6,
        review: "A great spot for a relaxing getaway. The house was clean and well-equipped. The host was friendly and provided excellent service.",
        stars: 4
      },
      {
        spotId: 5,
        userId: 1,
        review: "What an amazing spot! The house was beautifully decorated and had everything we needed. The host was very helpful and made sure we had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 5,
        userId: 3,
        review: "We loved our time at this spot. The host was attentive and made us feel at home. The location was perfect for exploring the nearby attractions.",
        stars: 5
      },
      {
        spotId: 5,
        userId: 6,
        review: "A great spot for a relaxing getaway. The house was clean and well-equipped. The host was friendly and provided excellent service.",
        stars: 4
      },
      {
        spotId: 5,
        userId: 4,
        review: "Had a fantastic stay at this spot. The house was spacious and had breathtaking views. The host was attentive and made sure we had everything we needed.",
        stars: 5
      },
      // Spot 6
      {
        spotId: 6,
        userId: 2,
        review: "We had an amazing time at this spot. The house was spacious and had all the amenities we needed. The host was very responsive and provided helpful tips.",
        stars: 5
      },
      {
        spotId: 6,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 6,
        userId: 5,
        review: "We had a wonderful stay at this spot. The house was well-maintained and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 6,
        userId: 6,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 6,
        userId: 2,
        review: "We had an amazing time at this spot. The house was spacious and had all the amenities we needed. The host was very responsive and provided helpful tips.",
        stars: 5
      },
      {
        spotId: 6,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 6,
        userId: 5,
        review: "We had a wonderful stay at this spot. The house was well-maintained and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 6,
        userId: 6,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 6,
        userId: 1,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 7
      {
        spotId: 7,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 7,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 7,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 7,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 7,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 7,
        userId: 3,
        review: "We had a fantastic time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 7,
        userId: 2,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 7,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 7,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 7,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 8
      {
        spotId: 8,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 8,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 8,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 8,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 8,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      // Spot 9
      {
        spotId: 9,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 9,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 9,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 10
      {
        spotId: 10,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 10,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 10,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 11
      {
        spotId: 11,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 11,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 11,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 12
      {
        spotId: 12,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 12,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 12,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 12,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 12,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 12,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 12,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 12,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 12,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 12,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 13
      {
        spotId: 13,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 13,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 13,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 13,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 13,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 13,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 13,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 13,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 13,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 13,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 14
      {
        spotId: 14,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 14,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 14,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 15
      {
        spotId: 15,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 15,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 15,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 16
      {
        spotId: 16,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 16,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 16,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 16,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 16,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 16,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 16,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 16,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 16,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 16,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 17
      {
        spotId: 17,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 17,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 17,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 17,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 17,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 17,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 17,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 17,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 17,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 17,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 18
      {
        spotId: 18,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 18,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 18,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 18,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 18,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 18,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 18,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 18,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 18,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 18,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 19
      {
        spotId: 19,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 19,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 19,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 19,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 19,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 19,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 19,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 19,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 19,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 19,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 20
      {
        spotId: 20,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 20,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 20,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 20,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 20,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 20,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 20,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 20,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 20,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 20,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 21
      {
        spotId: 21,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 21,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 21,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 21,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 21,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 21,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 21,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 21,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 21,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 21,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 22
      {
        spotId: 22,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 22,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 22,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 22,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 22,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 22,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 22,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 22,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 22,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 22,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 23
      {
        spotId: 23,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 23,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 23,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 23,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 23,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 23,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 23,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 23,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 23,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 23,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 24
      {
        spotId: 24,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 24,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 24,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 24,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 24,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 24,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 24,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 24,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 24,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 24,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 25
      {
        spotId: 25,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 25,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 25,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 25,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 25,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 25,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 25,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 25,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 25,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 25,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 26
      {
        spotId: 26,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 26,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 26,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 26,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 26,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 26,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 26,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 26,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 26,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 26,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 27
      {
        spotId: 27,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 27,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 27,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 27,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 27,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 27,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 27,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 27,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 27,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 27,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 28
      {
        spotId: 28,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 28,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 28,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 28,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 28,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 28,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 28,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 28,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 28,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 28,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 29
      {
        spotId: 29,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 29,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 29,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 30
      {
        spotId: 30,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 30,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 30,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 30,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 30,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 3,
        review: "We had an amazing time at this spot. The house was spacious and well-maintained. The host was responsive and provided helpful information about the area.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 4,
        review: "This spot was perfect for our family vacation. The host was friendly and accommodating. The house had beautiful ocean views and was very clean.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 6,
        review: "We had a wonderful stay at this spot. The house was well-equipped and had everything we needed. The host was fantastic and made us feel welcome.",
        stars: 5
      },
      {
        spotId: 29,
        userId: 1,
        review: "The spot was just what we needed for a peaceful getaway. The host was attentive and made sure we had a comfortable stay. Highly recommended!",
        stars: 4
      },
      {
        spotId: 29,
        userId: 3,
        review: "This spot exceeded our expectations. The host was friendly and provided excellent service. The house was clean and had stunning ocean views.",
        stars: 5
      },
      // Spot 30
      {
        spotId: 30,
        userId: 2,
        review: "We had a fantastic time at this spot. The house was well-equipped and had a beautiful garden. The host was helpful and made us feel at home.",
        stars: 5
      },
      {
        spotId: 30,
        userId: 4,
        review: "This spot was perfect for a quiet retreat. The host was accommodating and provided great recommendations for local activities. We had a wonderful stay.",
        stars: 5
      },
      {
        spotId: 30,
        userId: 5,
        review: "Had a great time at this spot. The house was clean and comfortable. The host was friendly and ensured we had a pleasant stay. Would come back again.",
        stars: 4
      },
      {
        spotId: 30,
        userId: 6,
        review: "We loved our stay at this spot. The house had a rustic charm and beautiful surroundings. The host was very welcoming and provided excellent service.",
        stars: 5
      },
      {
        spotId: 30,
        userId: 1,
        review: "A wonderful spot to relax and unwind. The host was attentive and made us feel at home. The house was cozy and had all the amenities we needed.",
        stars: 5
      }
    ]);

    // // ReviewImages //////////////////////////////////////////////////////

    options.tableName = 'ReviewImages';

    await queryInterface.bulkInsert(options, [
      { reviewId: 1, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691132888/AirBreathe%27n%27Be/reviewImages/ecf81df8-b460-4e9a-b1da-bae9656629c3_q9mxks.webp' },
      { reviewId: 21, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691132967/AirBreathe%27n%27Be/reviewImages/691a7574-6af4-4e55-8bcf-e6aee34c7bce_uxn9r5.webp' },
      { reviewId: 41, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133054/AirBreathe%27n%27Be/reviewImages/80d77ec5-66b1-4a4f-8167-d8b7513ee549_kh9r09.webp' },
      { reviewId: 61, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133116/AirBreathe%27n%27Be/reviewImages/01123ac9-8820-418a-9ec2-8a129efdfc3b_lb5viz.webp' },
      { reviewId: 81, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133116/AirBreathe%27n%27Be/reviewImages/60493bf0-3ab3-4fe8-bf3d-d8c6761f20ef_r9lxq3.webp' },
      { reviewId: 101, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133229/AirBreathe%27n%27Be/reviewImages/b2ec62c9-a781-4675-8ac4-87e3296ff87a_woplb2.webp' },
      { reviewId: 121, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133229/AirBreathe%27n%27Be/reviewImages/fe1d229d-f78d-442d-bd00-c989a66c928f_i6eslb.webp' },
      { reviewId: 141, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133296/AirBreathe%27n%27Be/reviewImages/117e1a9d-1c90-4dc5-838d-f3db0bd1f99c_djoyhm.webp' },
      { reviewId: 161, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133337/AirBreathe%27n%27Be/reviewImages/0dd613eb-21d5-4955-adb3-a48d05834ed5_yswdtd.webp' },
      { reviewId: 181, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133408/AirBreathe%27n%27Be/reviewImages/56939070-6bf5-46f6-9ae5-dc708c6155d9_p4juze.webp' },
      { reviewId: 201, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133451/AirBreathe%27n%27Be/reviewImages/a3fb3acb-3005-47f8-a499-09cc81f48320_nog3ck.webp' },
      { reviewId: 221, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133519/AirBreathe%27n%27Be/reviewImages/394c91ba-8586-444c-bfaa-e43ae11ee6f8_r7mykp.webp' },
      { reviewId: 241, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133523/AirBreathe%27n%27Be/reviewImages/b4e9d671-e5ff-4248-8c65-50e4ad8ca822_lajj9m.webp' },
      { reviewId: 261, url: 'https://res.cloudinary.com/dfrj03hsi/image/upload/v1691133564/AirBreathe%27n%27Be/reviewImages/17ff8219-73e7-4928-8193-c332f9a2eb41_z2k0ko.webp' }
    ]);

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
