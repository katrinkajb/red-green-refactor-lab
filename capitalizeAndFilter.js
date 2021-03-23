const capitalizeAndFilter = (array) => {
  const newArray = [];

  array.forEach(capAndFilter);

  function capAndFilter(item, i) {
    array[i] = item.toUpperCase();

    if(array[i].charAt(0) !== 'F') {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

module.exports = capitalizeAndFilter;
