const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
db = require("../models/index");
const User = db.user;

verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];
	if (!token) {
		return res.status(403).send({
			message: "¡Falta el token!",
		});
	}
	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "¡No autorizado!",
			});
		}
		req.userId = decoded.id;
		next();
	});
};

isAdmin = (req, res, next) => {
	User.findByPk(req.userId).then((user) => {
		user.getRoles().then((roles) => {
			for (let i = 0; i < roles.length; i++) {
				if (roles[i].name === "administrador") {
					next();
					return;
				}
			}
			res.status(403).send({
				message: "¡Requiere el rol de Administrador!",
			});
			return;
		});
	});
};

isOperador = (req, res, next) => {
	User.findByPk(req.userId).then((user) => {
		user.getRoles().then((roles) => {
			for (let i = 0; i < roles.length; i++) {
				if (roles[i].name === "operador") {
					next();
					return;
				}
			}
			res.status(403).send({
				message: "¡Requiere el rol de Operador",
			});
		});
	});
};

const authJwt = {
	verifyToken: verifyToken,
	isAdmin: isAdmin,
	isOperador: isOperador,
};
module.exports = authJwt;
