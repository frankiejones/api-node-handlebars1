const fetch = require ("node-fetch"); //  npm i node-fetch


const getRandomCocktail = async() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    let data = await fetch(url) // promises accepted,rejected,pending.
    let jsonData = await data.json() // promise( all this is doing is making the data return in a .json format)
    return jsonData;
    // return data;
};

module.exports = {
    getRandomCocktail
}; 