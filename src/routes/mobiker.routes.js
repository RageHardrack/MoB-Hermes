const controller = require("../controller/mobiker.controller");

module.exports = (app) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	// Ruta para crear nuevo MoBiker
	app.post("/mobikers/crear-nuevo-mobiker", controller.crearMobiker);

	// Ruta para mostrar todos los MoBikers
	app.get("/mobikers/equipo-mobiker", controller.equipoMobiker);

	// Ruta para mostrar UN MoBiker
	app.get("/mobikers/equipo-mobiker/:id", controller.obtenerMobiker);

	// Ruta para editar un MoBiker
	app.put("/mobikers/equipo-mobiker/:id", controller.editarMobiker);
};