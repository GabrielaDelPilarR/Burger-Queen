import axios from "axios";
const API_URL = "http://localhost:3001/users";
const token = JSON.parse(localStorage.getItem("users"));

const postUser = async (email, password, role) => {

  const newUser = {
    email,
    password,
    roles: {
        role
    }
  };

  const req = await axios.post(API_URL, newUser, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  console.log(req)
};

export default postUser;
