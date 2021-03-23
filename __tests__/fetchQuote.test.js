const fetchQuote = require('../fetchQuote');

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
