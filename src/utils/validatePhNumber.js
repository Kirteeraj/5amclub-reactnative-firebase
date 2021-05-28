var validatePhNumber = (phoneNo) => {
  var re = /^[0-9]{10}$/;
  return re.test(phoneNo);
};

export {validatePhNumber};
