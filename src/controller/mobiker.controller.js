const db = require("../models/index");
const Mobiker = db.mobiker;

module.exports = {
	storageMobiker: (req, res) => {
		Mobiker.create({
			nombres: req.body.nombres,
			apellidos: req.body.apellidos,
			distrito: req.body.distrito,
		})
			.then(res.json({ message: "¡Se ha creado el MoBiker con éxito!" }))
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	},

	// Mostrar todos los MoBikers
	equipoMobiker: (req, res) => {
		Mobiker.findAll().then((mobikers) => {
			res.json(mobikers);
		});
	},

	// Mostrar 1 MoBiker
	getMobiker: (req, res) => {
		Mobiker.findByPk(req.params.id).then((mobiker) => {
			if (!mobiker) {
				res.status(404).json({ msg: "No se ha encontrado el MoBiker" });
			} else {
				res.json(mobiker);
			}
		});
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
