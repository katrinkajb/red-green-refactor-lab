const fetchQuote = require('../fetchQuote');

jest.mock('node-fetch');
const fetch = require('node-fetch');
fetch.mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve([
    {
      character: 'Fry',
      quote: 'Stuff',
      image: 'https://my-image.png',
    }
  ])
}));


describe('fetch quotes function', () => {
  it('returns a single quote from the Futurama API', () => {

    fetchQuote();
    
    expect.objectContaining({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    });
  });
});
