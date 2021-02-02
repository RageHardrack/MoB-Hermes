const express = require("express");
const cors = require("cors");

// Initializations
const app = express();

// Settings
const corsOptions = {
	origin: "http://localhost:8081",
};

// Creating the sync to DB
const db = require("./src/models");
// const Role = db.role;

// For Development. It will drop and re-create the DB
// db.sequelize.sync({ force: true }).then(() => {
// 	console.log("Drop and Resync the DB");
// 	initial();
// });

// For Production
db.sequelize.sync();

// function initial() {
// 	Role.create({
// 		id: 1,
// 		name: "administrador",
// 	});

// 	Role.create({
// 		id: 2,
// 		name: "operador",
// 	});

// 	Role.create({
// 		id: 3,
// 		name: "auditor",
// 	});

// 	Role.create({
// 		id: 4,
// 		name: "cliente",
// 	});

// 	Role.create({
// 		id: 5,
// 		name: "mobiker",
// 	});
// }

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

// Routes
app.get("/", (req, res) => {
	res.json({ message: "¡Bienvenidos! Soy Hermes" });
});

require("./src/routes/auth.routes")(app);
require("./src/routes/user.routes")(app);

// Set PORT and start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
