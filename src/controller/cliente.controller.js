const { rolCliente } = require("../models/index");
const db = require("../models/index");
const Cliente = db.cliente;
const Distrito = db.distrito;
const Comprobante = db.comprobante;
const RolCliente = db.rolCliente;
const Carga = db.carga;
const FormaDePago = db.formaDePago;

const Op = db.Sequelize.Op;

module.exports = {
	storageCliente: async (req, res) => {
		try {
			let cliente = {
				contacto: req.body.contacto,
				empresa: req.body.empresa,
				direccion: req.body.direccion,
				telefono: req.body.telefono,
				otroDato: req.body.otroDato,
				email: req.body.email,
				ruc: req.body.ruc,
			};

			let distrito = await Distrito.findOne({
				where: {
					distrito: req.body.distrito,
				},
			});

			let comprobante = await Comprobante.findOne({
				where: {
					tipo: req.body.comprobante,
				},
			});

			let rolDelCliente = await RolCliente.findOne({
				where: {
					rol: req.body.rol,
				},
			});

			let tipoDeCarga = await Carga.findOne({
				where: {
					tipo: req.body.carga,
				},
			});

			let pago = await FormaDePago.findOne({
				where: {
					pago: req.body.pago,
				},
			});

			if (distrito && comprobante && rolDelCliente && tipoDeCarga && pago) {
				try {
					let nuevoCliente = await Cliente.create(cliente);

					await nuevoCliente.setDistrito(distrito);
					await nuevoCliente.setTipoDeComprobante(comprobante);
					await nuevoCliente.setRolCliente(rolDelCliente);
					await nuevoCliente.setTipoDeCarga(tipoDeCarga);
					await nuevoCliente.setFormaDePago(pago);

					res.json({ message: "¡Se ha creado el Cliente con éxito!" });
				} catch (err) {
					res.status(500).send({ message: err.message });
				}
			} else {
				res.json({ message: "¡Error! No se ha podido crear el cliente..." });
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar todos los Clientes
	indexClientes: async (req, res) => {
		try {
			let clientes = await Cliente.findAll({
				include: [
					{
						model: Distrito,
					},
					{
						model: Comprobante,
					},
					{
						model: RolCliente,
					},
					{
						model: Carga,
					},
					{
						model: FormaDePago,
					},
				],
			});
			res.json(clientes);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	getClienteById: async (req, res) => {
		try {
			const id = req.params.id;

			let dataCliente = await Cliente.findByPk(id, {
				include: [
					{
						model: Distrito,
					},
					{
						model: Comprobante,
					},
					{
						model: RolCliente,
					},
					{
						model: Carga,
					},
					{
						model: FormaDePago,
					},
				],
			});

			if (!dataCliente) {
				res.status(404).json({ msg: "No se ha encontrado el Cliente" });
			} else {
				res.json(dataCliente);
			}
		} catch (error) {
			res.status(500).send({
				message: "Error, no se encontró el cliente con el id = " + id,
			});
		}
	},

	updateCliente: async (req, res) => {
		try {
			const id = req.params.id;

			let distrito = await Distrito.findOne({
				where: {
					distrito: req.body.distrito,
				},
			});

			let comprobante = await Comprobante.findOne({
				where: {
					tipo: req.body.comprobante,
				},
			});

			let rolDelCliente = await RolCliente.findOne({
				where: {
					rol: req.body.rol,
				},
			});

			let tipoDeCarga = await Carga.findOne({
				where: {
					tipo: req.body.carga,
				},
			});

			let pago = await FormaDePago.findOne({
				where: {
					pago: req.body.pago,
				},
			});

			let cliente = {
				contacto: req.body.contacto,
				empresa: req.body.empresa,
				direccion: req.body.direccion,
				telefono: req.body.telefono,
				otroDato: req.body.otroDato,
				email: req.body.email,
				ruc: req.body.ruc,
				distritoId: distrito.id,
				setTipoDeComprobanteId: comprobante.id,
				rolClienteId: rolDelCliente.id,
				tipoDeCargaId: tipoDeCarga.id,
				formaDePagoId: pago.id,
			};

			let clienteActualizado = await Cliente.update(cliente, {
				where: { id: id },
			});

			if (clienteActualizado) {
				res.json({ message: "¡Se ha actualizado el Cliente con éxito!" });
			} else {
				res.json({
					message: "¡Error! No se ha podido actualizar el cliente...",
				});
			}
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	},

	// Buscar cliente por nombre o empresa
	searchCliente: async (req, res) => {
		try {
			const query = req.query.contacto;

			let cliente = await Cliente.findAll({
				where: {
					[Op.or]: [
						{ contacto: { [Op.like]: `%${query}%` } },
						{ empresa: { [Op.like]: `%${query}%` } },
					],
				},
				include: [
					{
						model: Distrito,
					},
					{
						model: Comprobante,
					},
					{
						model: RolCliente,
					},
					{
						model: Carga,
					},
					{
						model: FormaDePago,
					},
				],
			});

			res.json(cliente);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},
};
