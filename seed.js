const db = require("./src/models/index");
const bcrypt = require("bcryptjs");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

// Usuarios
const users = [
	{
		fullName: "Daniel Colmenares",
		username: "dcolmenares",
		email: "dacolmenares93@gmail.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: ["administrador", "mobiker"],
	},
	{
		fullName: "Fernando Carbajal",
		username: "fcarbajal",
		email: "fcarbajal@dan.com",
		password: bcrypt.hashSync("123123", 10),
		empresa: "Mail On Bike",
		roles: ["administrador", "mobiker"],
	},
];

// Roles
const roles = [
	{ id: 1, name: "administrador" },
	{ id: 2, name: "operador" },
	{ id: 3, name: "auditor" },
	{ id: 4, name: "cliente" },
	{ id: 5, name: "mobiker" },
];

// Associations
db.role.belongsToMany(db.user, {
	through: "user_roles",
	foreignKey: "roleId",
	otherKey: "userId",
});
db.user.belongsToMany(db.role, {
	through: "user_roles",
	foreignKey: "userId",
	otherKey: "roleId",
});

db.sequelize
	.sync({ force: true })
	.then(() => {
		// Crear conexión
		console.log("Borrando data y creando nuevas tablas...");
	})
	.then(() => {
		// Creando roles
		roles.forEach((rol) => Role.create(rol));
	})
	.then(() => {
		// Creando usuarios
		users.forEach((user) =>
			User.create(user).then((usuario) => {
				if (users.roles) {
					Role.findAll({
						where: {
							name: {
								[Op.or]: users.roles,
							},
						},
					}).then((roles) => {
						usuario.setRoles(roles);
					});
				}
			})
		);
	});
