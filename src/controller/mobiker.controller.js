const db = require("../models/index");
const Mobiker = db.mobiker;
const Distrito = db.distrito;

module.exports = {
	storageMobiker: async (req, res) => {
		try {
			const mobiker = await Mobiker.create({
				nombres: req.body.nombres,
				apellidos: req.body.apellidos,
				telefono: req.body.telefono,
				telegram: req.body.telegram,
				direccion: req.body.direccion,
				tipoDocumento: req.body.tipoDocumento,
				numeroDocumento: req.body.numeroDocumento,
				email: req.body.email,
				genero: req.body.genero,
				banco: req.body.banco,
				tipoCuenta: req.body.tipoCuenta,
				numeroCuentaBancaria: req.body.numeroCuentaBancaria,
				equipo: req.body.equipo,
			});

			let distrito = await Distrito.findOne({
				where: {
					distrito: req.body.distrito,
				},
			});

			if (distrito) {
				try {
					await mobiker.setDistrito(distrito);

					res.json({ message: "¡Se ha creado el MoBiker con éxito!" });
				} catch (err) {
					res.status(500).send({ message: err.message });
				}
			} else {
				res.json({ message: "¡Error! No se ha podido crear el mobike..." });
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar todos los MoBikers
	equipoMobiker: async (req, res) => {
		try {
			let mobikers = await Mobiker.findAll({
				include: [
					{
						model: Distrito,
					},
				],
			});
			res.json(mobikers);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar 1 MoBiker
	getMobiker: async (req, res) => {
		try {
			let mobiker = await Mobiker.findByPk(req.params.id, {
				include: [
					{
						model: Distrito,
					},
				],
			});

			if (!mobiker) {
				res.status(404).json({ msg: "No se ha encontrado el MoBiker" });
			} else {
				res.json(mobiker);
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Editar MoBiker
	editMobiker: (req, res) => {
		Mobiker.findByPk(req.params.id).then((mobiker) => {
			if (!mobiker) {
				res.status(404).json({ msg: "No se ha encontrado el MoBiker" });
			} else {
				req.mobiker.nombres = req.body.nombres;
				req.mobiker.apellidos = req.body.apellidos;
				req.mobiker.distrito = req.body.distrito;

				req.mobiker
					.save()
					.then((modMobiker) => {
						res.json(modMobiker);
					})
					.catch((err) => {
						res
							.status(500)
							.json({ msg: "No se ha podido actualizar el MoBiker" });
					});
			}
		});
	},
};
