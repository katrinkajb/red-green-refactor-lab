const capitalizeAndFilter = (array) => {
  const newArray = [];

  for(let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();


    if(array[i].charAt(0) !== 'F') {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

module.exports = capitalizeAndFilter;
