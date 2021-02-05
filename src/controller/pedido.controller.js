const db = require("../models/index");
const Pedido = db.pedido;

module.exports = {
	crearPedido: (req, res) => {
		Pedido.create({
			fecha: new Date(),
			contactoRemitente: req.body.contactoRemitente,
			empresaRemitente: req.body.empresaRemitente,
			direccionRemitente: req.body.direccionRemitente,
			distritoRemitente: req.body.distritoRemitente,
			contactoConsignado: req.body.contactoConsignado,
			empresaConsignado: req.body.empresaConsignado,
			direccionConsignado: req.body.direccionConsignado,
			distritoConsignado: req.body.distritoConsignado,
			tarifa: req.body.tarifa,
		})
			.then(res.json({ message: "¡Se ha creado el Pedido con éxito!" }))
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	},

	// Mostrar todos los Pedidos
	showPedidos: (req, res) => {
		Pedido.findAll().then((pedidos) => {
			res.json(pedidos);
		});
	},
};
