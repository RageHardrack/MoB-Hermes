const controller = require("../controller/auxiliares.controller");

module.exports = (app) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	// Ruta para obtener los roles de los usuarios
	app.get("/auxiliares/roles-usuarios", controller.sendRolesUsuarios);
};
