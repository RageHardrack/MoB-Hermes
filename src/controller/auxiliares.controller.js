const db = require("../models/index");
const Role = db.role;
const Distrito = db.distrito;
const Comprobante = db.comprobante;
const Carga = db.carga;
const Modalidad = db.modalidad;
const FormaDePago = db.formaDePago;
const RolCliente = db.rolCliente;
const Envio = db.envio;
const Rango = db.rango;

module.exports = {
	sendRolesUsuarios: async (req, res) => {
		sendRoles = await Role.findAll();
		res.send(sendRoles);
	},

	sendDistritos: async (req, res) => {
		distritos = await Distrito.findAll();
		res.send(distritos);
	},

	sendTiposComprobantes: async (req, res) => {
		comprobantes = await Comprobante.findAll();
		res.send(comprobantes);
	},

	sendTipoCarga: async (req, res) => {
		cargas = await Carga.findAll();
		res.send(cargas);
	},

	sendTipoModalidad: async (req, res) => {
		modalidad = await Modalidad.findAll();
		res.send(modalidad);
	},

	sendFormaPago: async (req, res) => {
		pagos = await FormaDePago.findAll();
		res.send(pagos);
	},

	sendRolCliente: async (req, res) => {
		rolesCliente = await RolCliente.findAll();
		res.send(rolesCliente);
	},

	sendTipoEnvio: async (req, res) => {
		envios = await Envio.findAll();
		res.send(envios);
	},

	sendRangosMoB: async (req, res) => {
		rangos = await Rango.findAll();
		res.send(rangos);
	},
};
