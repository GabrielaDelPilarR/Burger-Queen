import axios from "axios";
const API_URL = "http://localhost:3001/orders";
const token = JSON.parse(localStorage.getItem("users"));

const getOrders = async (state) => {
  const request = await axios.get(API_URL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  state(request.data);
};

export default getOrders;
