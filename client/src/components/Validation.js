const validateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.match(emailRegular)
    ? setEmailError('Email not valid')
    : setEmailError('');
};

const validatePhone = ({ phone, setPhoneError }) => {
  var phoneRegular = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phone && !phone.match(phoneRegular)
    ? setPhoneError('Phone Number not valid')
    : setPhoneError('');
};

const validateFullName = ({ fullName, setFullNameError }) => {
  return fullName && fullName.length < 5
    ? setFullNameError('Full name is too short')
    : fullName && fullName.length > 50
    ? setFullNameError('Try to make short and meanfull')
    : setFullNameError('');
};

const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5
    ? setMessageError('Message is too short')
    : message && message.length > 200
    ? setMessageError('Try to make short and meanfull')
    : setMessageError('');
};

export { validateEmail, validateFullName, validateMessage, validatePhone };
