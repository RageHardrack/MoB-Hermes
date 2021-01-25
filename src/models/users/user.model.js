module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("users", {
		nombre: {
			type: Sequelize.STRING,
		},
		username: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
		empresa: {
			type: Sequelize.STRING,
		},
	});
	return User;
};
