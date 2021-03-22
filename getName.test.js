const getName = require('./getName.js');

describe('get name function', () => {
  it('takes in an object and returns the name', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };

    const spotName = getName(spot);
    expect(spotName).toEqual('spot');
  });
});

describe('get name function', () => {
  it('takes in an object and returns the name', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

    const characterName = getName(character);

    expect(characterName).toEqual('Aang');
  });
});
