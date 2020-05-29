const fetch = require ("node-fetch"); //  npm i node-fetch
const fs = require('fs'); // no npm needed
// const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NAPI}`;
const url = "https://api.nasa.gov/planetary/apod?api_key=jkkXhW0Tbo20lV8FPIY8ewcZTFo3dAZmLiLJtKlP"

const getNasaPic = async() => {
    let data = await fetch(url) // promises accepted,rejected,pending.
    let jsonData = await data.json() // promise( all this is doing is making the data return in a .json format)
    return jsonData;
    // return data;
};

module.exports = {
    getNasaPic
}; 

