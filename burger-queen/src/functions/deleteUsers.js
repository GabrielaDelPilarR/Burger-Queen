import axios from "axios";
const API_URL = "http://localhost:3001/users/";
const token = JSON.parse(localStorage.getItem("users"));

const deleteUsers = async (id) => {
  const res= await axios.delete(API_URL + id, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res
};

export default deleteUsers;