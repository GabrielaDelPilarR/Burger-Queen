const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

//const secret = "EsUnSecreto";

const adminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiYWRtaW4yQGdtYWlsLmNvbSIsInJvbGVzIjp7ImFkbWluIjp0cnVlfX0sImlhdCI6MTY2NzQzMzAyNCwiZXhwIjoxNjY3NTE5NDI0fQ.X936EikYBxKjWdPqvMHvUfrRiRcp1pYzs5-DkqwhMns";
const waiterToken =
  "$2b$10$OVuh837Qg4Vs1Mq1wJKB4udIqdugT1/TJ0nCwR9vht2dZBj8S9kGy";

const chefToken =
  "$2b$10$Mf23YiWWQPwb2g/iDjxHa.SW2H2lG4ypYm/I5kM9p/BNtroDLwq9S";

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
  console.log(req.headers);

  if (req.method === "POST" && req.path === "/auth") {
    next();
  } else if (req.headers.authorization === `Bearer ${adminToken}` || req.headers.authorization === `Bearer ${chefToken}`|| req.headers.authorization === `Bearer ${waiterToken}`) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.post("/auth", (req, res) => {
  const users = [
    {
      email: "admin2@gmail.com",
      password: "12345",
    },
    {
      email: "mesero1bq@gmail.com",
      password: "12345",
    },
    {
      email: "chef1bq@gmail.com",
      password: "12345",
    },
  ];

  const userEmail = users.map((user) => user.email);
  const userPassword = users.map((user) => user.password);

  console.log(userEmail, userPassword);

  if (
    userEmail.includes(req.body.email) &&
    userPassword.includes(req.body.password)
  ) {
    if (req.body.email === "admin2@gmail.com")
      res.jsonp({
        token: adminToken,
      });
  }
  if (req.body.email === "mesero1bq@gmail.com") {
    res.jsonp({
      token: waiterToken,
    });
  }
  if (req.body.email === "chef1bq@gmail.com") {
    res.jsonp({
      token: chefToken,
    });
  } else res.status(400).send("Bad Request");
});

server.post("/orders", async (req, res) => {
  try {
    const today = new Date();
    const now = today.toLocaleDateString("en-US");
    const order = {
      id: req.body.id,
      userId: req.body.userId,
      client: req.body.client,
      products: req.body.products,
      status: "pending",
      dateEntry: now,
      dateProcessed: "",
    };
    const orders = router.db.get("orders");
    console.log(orders);
    order.id = orders.__wrapped__.orders.length + 1;

    const result = await orders.push(order).write();
    console.log("result", result);
    res.status(200).jsonp(order);
  } catch (err) {
    res.status(400).send("Orden vacía o sin id");
    res.status(401).send("Sin cabecera de autenticación");
  }
});

server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
