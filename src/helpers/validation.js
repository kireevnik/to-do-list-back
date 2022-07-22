const validationString = (text) => {       
  return (typeof text !== 'string'|| text === "");
};

module.exports = {
  validationString
};
 