import axios from "axios";
const API_URL = "http://localhost:3001/orders";
const token = JSON.parse(localStorage.getItem("users"));

const postOrder = async (client, order) => {
  const newOrder = {
    id: "",
    userId: "mesero1",
    client,
    products: order.map((item) => {
      const product = {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
      return product;
    }),
  };

  const request = await axios.post(API_URL, newOrder, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return request;
};

export default postOrder;
