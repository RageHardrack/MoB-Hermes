const db = require("../models/index");
const Role = db.role;

module.exports = {
	sendRolesUsuarios: async (req, res) => {
		sendRoles = await Role.findAll();
		res.send(sendRoles);
	},
};
