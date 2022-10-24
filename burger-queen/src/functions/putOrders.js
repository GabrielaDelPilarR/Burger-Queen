import axios from "axios";
const API_URL = "http://localhost:3001/orders/";
const token = JSON.parse(localStorage.getItem("users"));

const putOrders = async (order, id) => {
  let changeOrder = order;
  changeOrder.status = 'delivering'
  console.log(changeOrder)
  await axios.put(API_URL + id, changeOrder, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const putOrdersToDelivered = async (order, id) => {
    let changeOrder = order;
    changeOrder.status = 'delivered';
    changeOrder.dateProcessed = new Date().toLocaleDateString('en-US')
    console.log(changeOrder)
    await axios.put(API_URL + id, changeOrder, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

export { putOrders, putOrdersToDelivered };
