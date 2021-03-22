const copyAndPush = require('../copyAndPush.js');

describe('copy and push function', () => {
  it('returns an array with original array and a new item added to the end', () => {
    const numbers = [1, 2, 3];

    const newArray = copyAndPush(numbers, 4);

    expect(newArray).toEqual([1, 2, 3, 4]);
  });
});

describe('copy and push function', () => {
  it('returns an array with original array and a new item added to the end', () => {
    const numbers = [1, 2, 3];

    const newArray = copyAndPush(numbers, 4);

    expect(newArray).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});
