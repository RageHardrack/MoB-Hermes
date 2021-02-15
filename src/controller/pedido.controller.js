const db = require("../models/index");
const Pedido = db.pedido;

module.exports = {
	storagePedido: async (req, res) => {
		try {
			let nuevoPedido = await Pedido.create({
				fecha: new Date(),
				contactoRemitente: req.body.contactoRemitente,
				empresaRemitente: req.body.empresaRemitente,
				direccionRemitente: req.body.direccionRemitente,
				distritoRemitente: req.body.distritoRemitente,
				telefonoRemitente: req.body.telefonoRemitente,
				otroDatoRemitente: req.body.otroDatoRemitente,
				contactoConsignado: req.body.contactoConsignado,
				empresaConsignado: req.body.empresaConsignado,
				direccionConsignado: req.body.direccionConsignado,
				distritoConsignado: req.body.distritoConsignado,
				telefonoConsignado: req.body.telefonoConsignado,
				otroDatoConsignado: req.body.otroDatoConsignado,
				tarifa: req.body.tarifa,
				distancia: req.body.distancia,
				CO2Ahorrado: req.body.CO2Ahorrado,
				ruido: req.body.ruido,
				status: req.body.status,
				statusFinanciero: req.body.statusFinanciero,
			});

			res.json({ message: "¡Se ha creado el Pedido con éxito!" });
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar todos los Pedidos
	indexPedidos: async (req, res) => {
		const pedidos = await Pedido.findAll();

		res.json(pedidos);
	},
};
