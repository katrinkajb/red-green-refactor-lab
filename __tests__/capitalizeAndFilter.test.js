const capitalizeAndFilter = require('../capitalizeAndFilter');

describe('capitalize and filter function', () => {
  it('takes an array of strings and returns all strings capitalized and filters out any starting with F', () => {
    const stringArray = ['you', 'filters', 'are', 'the', 'freaking', 'best'];

    const updatedString = capitalizeAndFilter(stringArray);

    expect(updatedString).toEqual(['YOU', 'ARE', 'THE', 'BEST']);
  });
});
