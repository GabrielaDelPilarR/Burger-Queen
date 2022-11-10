import axios from "axios";
const API_URL = "http://localhost:3001/users";
const token = JSON.parse(localStorage.getItem("users"));

const postUser = async (name, email, password, role) => {

  const newUser = {
    name,
    email,
    password,
    role,
  };

  const res = await axios.post(API_URL, newUser, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return res.data
};

export default postUser;
