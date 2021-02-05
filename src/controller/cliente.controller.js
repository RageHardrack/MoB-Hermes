const db = require("../models/index");
const Cliente = db.cliente;

module.exports = {
	crearCliente: (req, res) => {
		Cliente.create({
			contacto: req.body.contacto,
			empresa: req.body.empresa,
			distrito: req.body.distrito,
		})
			.then(res.json({ message: "¡Se ha creado el Cliente con éxito!" }))
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	},

	// Mostrar todos los Clientes
	showClientes: (req, res) => {
		Cliente.findAll().then((clientes) => {
			res.json(clientes);
		});
	},
};
