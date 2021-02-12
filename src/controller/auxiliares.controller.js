const db = require("../models/index");
const Role = db.role;

module.exports = {
	rolesUsuarios: async (req, res) => {
		roles = await Role.findAll();
		res.send(roles);
	},
};
