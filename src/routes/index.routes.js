const router = require("express").Router();

// Home
router.get("/", (req, res) => {
	res.json({ bienvenida: "¡Bienvenidos! Soy Hermes" });
});

// Auth Route
require("./auth.routes")(router);

// User Route
require("./user.routes")(router);

module.exports = router;
