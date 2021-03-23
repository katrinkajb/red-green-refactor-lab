const fetch = require('node-fetch');

// not getting the response from the API, yet the test is passing for some reason
const fetchQuote = async() => {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');

  const body = await response.json();

  const quote = {
    name: body.character,
    text: body.quote,
    image: body.image,
  };

  return quote;
};


module.exports = fetchQuote;
