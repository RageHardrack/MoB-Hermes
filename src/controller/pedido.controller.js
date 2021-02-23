const db = require("../models/index");
const Pedido = db.pedido;
const Distrito = db.distrito;
const Mobiker = db.mobiker;
const Cliente = db.cliente;
const Envio = db.envio;
const Modalidad = db.modalidad;
const Status = db.status;

const Op = db.Sequelize.Op;

module.exports = {
	storagePedido: async (req, res) => {
		try {
			let pedido = {
				fecha: req.body.fecha,
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
				tipoCarga: req.body.tipoCarga,
				formaPago: req.body.formaPago,
				tarifa: req.body.tarifa,
				comision: req.body.comision,
				distancia: req.body.distancia,
				CO2Ahorrado: req.body.CO2Ahorrado,
				ruido: req.body.ruido,
				statusId: 1,
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

			let clienteAsignado = await Cliente.findOne({
				where: {
					contacto: req.body.contactoRemitente,
				},
			});

			if (
				distritoPedido &&
				mobiker &&
				tipoEnvio &&
				modalidadPedido &&
				clienteAsignado
			) {
				try {
					let nuevoPedido = await Pedido.create(pedido);

					await nuevoPedido.setDistrito(distritoPedido);
					await nuevoPedido.setMobiker(mobiker);
					await nuevoPedido.setTipoDeEnvio(tipoEnvio);
					await nuevoPedido.setModalidad(modalidadPedido);
					await nuevoPedido.setCliente(clienteAsignado);

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
				{
					model: Status,
				},
			],
		});

		res.json(pedidos);
	},

	// Mostrar 1 Pedido por id
	getPedidoById: async (req, res) => {
		try {
			const id = req.params.id;

			let pedido = await Pedido.findByPk(id, {
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
					{
						model: Status,
					},
				],
			});

			if (!pedido) {
				res.status(404).json({ msg: "No se ha encontrado el Pedido" });
			} else {
				res.json(pedido);
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Editar Pedido
	updatePedido: async (req, res) => {
		try {
			const id = req.params.id;

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

			let pedido = {
				fecha: req.body.fecha,
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
				tipoCarga: req.body.tipoCarga,
				formaPago: req.body.formaPago,
				tarifa: req.body.tarifa,
				comision: req.body.comision,
				distancia: req.body.distancia,
				CO2Ahorrado: req.body.CO2Ahorrado,
				ruido: req.body.ruido,
				statusId: 1,
				statusFinanciero: req.body.statusFinanciero,
				distritoId: distritoPedido.id,
				mobikerId: mobiker.id,
				tipoDeEnvioId: tipoEnvio.id,
				modalidadId: modalidadPedido.id,
			};

			let pedidoActualizado = await Pedido.update(pedido, {
				where: { id: id },
			});

			if (pedidoActualizado) {
				res.json({ message: "¡Se ha actualizado el Pedido con éxito!" });
			} else {
				res.json({
					message: "¡Error! No se ha podido actualizar el Pedido...",
				});
			}
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	},

	// Buscar pedido por id, cliente, etc
	searchPedido: async (req, res) => {
		try {
			const query = req.query.id;

			let pedido = await Pedido.findAll({
				where: {
					[Op.or]: [
						{ id: { [Op.like]: `%${query}%` } },
						{ contactoRemitente: { [Op.like]: `%${query}%` } },
						{ empresaRemitente: { [Op.like]: `%${query}%` } },
						{ contactoConsignado: { [Op.like]: `%${query}%` } },
					],
				},
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
					{
						model: Status,
					},
				],
			});

			res.json(pedido);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	},
};
