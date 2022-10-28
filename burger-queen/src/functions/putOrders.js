import axios from "axios";
const API_URL = "http://localhost:3001/orders/";
const token = JSON.parse(localStorage.getItem("users"));

const putOrders = async (order, id,text) => {
  let changeOrder = order
  changeOrder.status = text

  const res = await axios.put(API_URL + id, changeOrder, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res
};

export { putOrders };
