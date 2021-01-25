const db = require("../models");
config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
	// Save the User to Database
	User.create({
		nombre: req.body.nombre,
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
		empresa: req.body.empresa,
	})
		.then((user) => {
			if (req.body.roles) {
				Role.findAll({
					where: {
						name: {
							[Op.or]: req.body.roles,
						},
					},
				}).then((roles) => {
					user.setRoles(roles).then(() => {
						res.send({
							message: "¡El usuario fue registrado satisfactoriamente!",
						});
					});
				});
			} else {
				// User role = 4 Cliente default
				user.setRoles([4]).then(() => {
					res.send({
						message: "¡El usuario fue registrado satisfactoriamente!",
					});
				});
			}
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.signin = (req, res) => {
	User.findOne({
		where: {
			username: req.body.username,
		},
	})
		.then((user) => {
			if (!user) {
				return res.status(404).send({ message: "Usuario no encontrado." });
			}
			let passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);
			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "¡Contraseña inválida!",
				});
			}
			let token = jwt.sign({ id: user.id }, config.secret, {
				expiresIn: 86400, // 24 hours
			});
			let authorities = [];
			user.getRoles().then((roles) => {
				for (let i = 0; i < roles.length; i++) {
					authorities.push("ROLE_" + roles[i].name.toUpperCase());
				}
				res.status(200).send({
					id: user.id,
					username: user.username,
					email: user.email,
					roles: authorities,
					accessToken: token,
				});
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
