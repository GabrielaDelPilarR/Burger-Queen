import axios from "axios";
const API_URL = "http://localhost:3001/users/";
const token = JSON.parse(localStorage.getItem("users"));

const putUser = async (user,password,role,id) => {
    console.log(user)
  let changeUser = user
  changeUser.password = password
  changeUser.role = role

  const res = await axios.put(API_URL + id, changeUser, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res
};

export { putUser };