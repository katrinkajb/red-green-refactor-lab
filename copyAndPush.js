const copyAndPush = (array, number) => {
  const copiedArray = [...array];
  copiedArray.push(number);

  return copiedArray;
};

module.exports = copyAndPush;
