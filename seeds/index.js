const mongoose = require('mongoose');
const cities = require('./cities');
const {descriptors, places} = require('./seedHelpers')
const Campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp')
.then(() =>{
    console.log('CONNECTION OPEN');

}).catch(err => console.log(err));

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () =>{
    await Campground.deleteMany({});
    for(let i=0; i<200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random()* 20) + 10;
        const camp  = new Campground({
            author: '65ee02c547057cd879c3db64',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis odio voluptate asperiores iste ad, tenetur nulla veritatis! Quibusdam quis eius expedita quasi hic quos, sed debitis consectetur iure accusantium qui?',
            price: price,
            geometry : {
                type: "Point",
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/drlyydmwq/image/upload/v1710879731/YelpCamp/dungb2ycjr5hb0bz5fxl.png',
                  filename: 'YelpCamp/dungb2ycjr5hb0bz5fxl',
                }
              ],
            
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});