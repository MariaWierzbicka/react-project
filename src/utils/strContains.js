const strContains = (strOne, strTwo) => {

  if (strOne.toLowerCase().includes(strTwo.toLowerCase())){
    return true;
  } else {
    return false;
  }
};

export default strContains;