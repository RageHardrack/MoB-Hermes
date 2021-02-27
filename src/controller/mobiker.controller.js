const db = require("../models/index");
const Mobiker = db.mobiker;
const Distrito = db.distrito;
const Rango = db.rango;

const Op = db.Sequelize.Op;

module.exports = {
	storageMobiker: async (req, res) => {
		try {
			const mobiker = {
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
				tipoBicicleta: req.body.tipoBicicleta,
				fechaNacimiento: req.body.fechaNacimiento,
				fechaIngreso: req.body.fechaIngreso,
			};

			let separaNombres = req.body.nombres.split(" ");
			let separaApellidos = req.body.apellidos.split(" ");

			mobiker.fullName = separaNombres[0] + " " + separaApellidos[0];

			let distrito = await Distrito.findOne({
				where: {
					distrito: req.body.distrito,
				},
			});

			let rangoInicial = 1;

			if (distrito) {
				try {
					let nuevoMobiker = await Mobiker.create(mobiker);

					await nuevoMobiker.setDistrito(distrito);
					await nuevoMobiker.setRango(rangoInicial);

					res.json({ message: "¡Se ha creado el MoBiker con éxito!" });
				} catch (err) {
					res.status(500).send({ message: err.message });
				}
			} else {
				res.json({ message: "¡Error! No se ha podido crear el mobiker..." });
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
					{
						model: Rango,
					},
				],
			});
			res.json(mobikers);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	// Mostrar 1 MoBiker por id
	getMobikerById: async (req, res) => {
		try {
			const id = req.params.id;

			let mobiker = await Mobiker.findByPk(id, {
				include: [
					{
						model: Distrito,
					},
					{
						model: Rango,
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
	updateMobiker: async (req, res) => {
		try {
			const id = req.params.id;

			let distrito = await Distrito.findOne({
				where: {
					distrito: req.body.distrito,
				},
			});

			let mobiker = {
				nombres: req.body.nombres,
				apellidos: req.body.apellidos,
				telefono: req.body.telefono,
				telegram: req.body.telegram,
				direccion: req.body.direccion,
				distritoId: distrito.id,
				tipoDocumento: req.body.tipoDocumento,
				numeroDocumento: req.body.numeroDocumento,
				email: req.body.email,
				genero: req.body.genero,
				banco: req.body.banco,
				tipoCuenta: req.body.tipoCuenta,
				numeroCuentaBancaria: req.body.numeroCuentaBancaria,
				equipo: req.body.equipo,
				tipoBicicleta: req.body.tipoBicicleta,
				fechaNacimiento: req.body.fechaNacimiento,
				fechaIngreso: req.body.fechaIngreso,
			};

			let mobikerActualizado = await Mobiker.update(mobiker, {
				where: {
					id: id,
				},
			});

			if (mobikerActualizado) {
				res.json({ message: "¡Se ha actualizado el MoBiker con éxito!" });
			} else {
				res.json({
					message: "¡Error! No se ha podido actualizar el mobiker...",
				});
			}
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},

	searchMobiker: async (req, res) => {
		try {
			const query = req.query.q;

			let mobiker = await Mobiker.findAll({
				where: {
					fullName: { [Op.like]: `%${query}%` },
				},
				include: [
					{
						model: Distrito,
					},
					{
						model: Rango,
					},
				],
			});

			res.json(mobiker);
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	},
};
