const db = require("../models/index");
const Cliente = db.cliente;
const Distrito = db.distrito;

module.exports = {
	crearCliente: async (req, res) => {
		try {
			let cliente = await Cliente.create({
				contacto: req.body.contacto,
				empresa: req.body.empresa,
				direccion: req.body.direccion,
				telefono: req.body.telefono,
				otroDato: req.body.otroDato,
				facturacion: req.body.facturacion,
			});

			let distrito = await Distrito.findOne({
				where: {
					distrito: req.body.distrito,
				},
			});

			if (distrito) {
				await cliente.setDistrito(distrito);
				res.json({ message: "¡Se ha creado el Cliente con éxito!" });
			} else {
				res.json({ message: "No se ha encontrado ese distrito..." });
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar todos los Clientes
	showClientes: (req, res) => {
		Cliente.findAll().then((clientes) => {
			res.json(clientes);
		});
	},
};
