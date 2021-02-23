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
	app.post("/pedidos/crear-nuevo-pedido", controller.storagePedido);

	// Ruta para mostrar todos los Pedidos
	app.get("/pedidos/tablero-pedidos", controller.indexPedidos);

	// Ruta para mostrar UN MoBiker
	app.get("/pedidos/tablero-pedidos/:id", controller.getPedidoById);

	// Ruta para editar un MoBiker
	app.put("/pedidos/tablero-pedidos/:id", controller.updatePedido);

	// Ruta para buscar mobikers por su nombre
	app.get("/pedidos", controller.searchPedido);
};
