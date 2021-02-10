const db = require("../models/index");
const Cliente = db.cliente;
const Distrito = db.distrito;

const Op = db.Sequelize.Op;

module.exports = {
	crearCliente: (req, res) => {
		Cliente.create({
			contacto: req.body.contacto,
			empresa: req.body.empresa,
			telefono: req.body.telefono,
			direccion: req.body.direccion,
		})
			.then((cliente) => {
				Distrito.findAll({
					where: {
						distrito: {
							[Op.or]: req.body.distrito,
						},
					},
				})
					.then((distrito) => {
						cliente.setDistritos(distrito).then(() => {
							res.json({ message: "¡Se ha creado el Cliente con éxito!" });
						});
					})
					.catch((err) => {
						res.status(500).send({ message: err.message });
					});
			})
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
