const controller = require("../controller/pedido.controller");

module.exports = (app) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	// Ruta para crear nuevo Pedido
	app.post("/pedidos/crear-nuevo-pedido", controller.crearPedido);

	// Ruta para mostrar todos los Pedidos
	app.get("/pedidos/tablero-pedidos", controller.showPedidos);
};
