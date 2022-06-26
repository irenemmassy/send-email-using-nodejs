import axios from 'axios';

// ****** Get IP adrress
export const IpAddress = async ({ setLoading, setIpData }) => {
  try {
    let res = await axios.get(
      `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_ADRRESS_API_KEY}`
    );
    if (res) {
      setLoading(false);
      setIpData(res.data.country_name);
    }
  } catch (error) {
    alert(`IP address Error: ${error}`);
  }
};

// *********** Get Countries
export const GetContries = async ({ setLoading, setCountries }) => {
  try {
    let res = await axios.get(
      `https://api.apilayer.com/number_verification/countries`,
      {
        headers: {
          apikey: process.env.REACT_APP_NUMBER_VELIDATE_API_KEY,
        },
      }
    );
    if (res) {
      setLoading(false);
      setCountries(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
    setLoading(false);
  }
};

// *********** Send email
export const SendEmail = async ({
  fullName,
  email,
  phone,
  message,
  setSend,
}) => {
  try {
    const datas = { fullName, email, phone, message };
    let res = await axios.post(`http://localhost:5000/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
