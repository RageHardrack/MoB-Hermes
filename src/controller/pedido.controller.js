const db = require("../models/index");
const Pedido = db.pedido;
const Distrito = db.distrito;
const Mobiker = db.mobiker;
const Cliente = db.cliente;
const Envio = db.envio;
const Modalidad = db.modalidad;

module.exports = {
	storagePedido: async (req, res) => {
		try {
			let pedido = {
				contactoRemitente: req.body.contactoRemitente,
				empresaRemitente: req.body.empresaRemitente,
				direccionRemitente: req.body.direccionRemitente,
				distritoRemitente: req.body.distritoRemitente,
				telefonoRemitente: req.body.telefonoRemitente,
				otroDatoRemitente: req.body.otroDatoRemitente,
				contactoConsignado: req.body.contactoConsignado,
				empresaConsignado: req.body.empresaConsignado,
				direccionConsignado: req.body.direccionConsignado,
				telefonoConsignado: req.body.telefonoConsignado,
				otroDatoConsignado: req.body.otroDatoConsignado,
				tarifa: req.body.tarifa,
				distancia: req.body.distancia,
				CO2Ahorrado: req.body.CO2Ahorrado,
				ruido: req.body.ruido,
				status: req.body.status,
				statusFinanciero: req.body.statusFinanciero,
			};

			let distritoPedido = await Distrito.findOne({
				where: {
					distrito: req.body.distritoConsignado,
				},
			});

			let mobiker = await Mobiker.findOne({
				where: {
					fullName: req.body.mobiker,
				},
			});
			let tipoEnvio = await Envio.findOne({
				where: {
					tipo: req.body.tipoEnvio,
				},
			});

			let modalidadPedido = await Modalidad.findOne({
				where: {
					tipo: req.body.modalidad,
				},
			});

			if (distritoPedido && mobiker && tipoEnvio && modalidadPedido) {
				try {
					let nuevoPedido = await Pedido.create(pedido);

					await nuevoPedido.setDistrito(distritoPedido);
					await nuevoPedido.setMobiker(mobiker);
					await nuevoPedido.setTipoDeEnvio(tipoEnvio);
					await nuevoPedido.setModalidad(modalidadPedido);

					res.json({ message: "¡Se ha creado el Pedido con éxito!" });
				} catch (err) {
					res.status(500).send({ message: err.message });
				}
			} else {
				res.json({ message: "¡Error! No se ha podido crear el pedido..." });
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar todos los Pedidos
	indexPedidos: async (req, res) => {
		const pedidos = await Pedido.findAll({
			include: [
				{
					model: Distrito,
				},
				{
					model: Mobiker,
					attributes: ["fullName"],
				},
				{
					model: Cliente,
					attributes: ["contacto", "empresa"],
				},
				{
					model: Envio,
				},
				{
					model: Modalidad,
				},
			],
		});

		res.json(pedidos);
	},
};
