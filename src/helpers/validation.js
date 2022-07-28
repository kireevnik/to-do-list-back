const validationString = (string) => {
  return (typeof string === 'string' && string !== "");
};

module.exports = {
  validationString
};
