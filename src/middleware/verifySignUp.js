const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

// No duplicates usernames or Emails
checkDuplicateUsernameOrEmail = (req, res, next) => {
	// Username
	User.findOne({
		where: {
			username: req.body.username,
		},
	}).then((user) => {
		if (user) {
			res.status(400).send({
				message: "¡Espera! Ese Usuario ya está en uso...",
			});
			return;
		}

		// Email
		User.findOne({
			where: {
				email: req.body.email,
			},
		}).then((user) => {
			if (user) {
				res.status(400).send({
					message: "¡Espera! Ese Email ya está en uso...",
				});
				return;
			}
			next();
		});
	});
};

// Check for existed roles
checkRolesExisted = (req, res, next) => {
	if (req.body.roles) {
		for (let i = 0; i < req.body.roles.length; i++) {
			if (!ROLES.includes(req.body.roles[i])) {
				res.status(400).send({
					message: "¡Error! Ese rol no existe = " + req.body.roles[i],
				});
				return;
			}
		}
	}
	next();
};

const verifySignUp = {
	checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
	checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
