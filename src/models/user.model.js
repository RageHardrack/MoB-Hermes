module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define(
		"users",
		{
			fullName: {
				type: Sequelize.STRING(25),
				allowNull: false,
			},
			username: {
				type: Sequelize.STRING(15),
				allowNull: false,
				validate: {
					len: {
						args: [4, 255],
						msg: "El usuario tiene que ser al menos 2 caracteres",
					},
				},
			},
			email: {
				type: Sequelize.STRING(35),
				allowNull: false,
				validate: {
					isEmail: {
						msg: "El email tiene que ser un correo válido",
					},
				},
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					len: {
						args: [6, 255],
						msg: "La contraseña tiene que tener al menos 6 caracteres",
					},
				},
			},
			empresa: {
				type: Sequelize.STRING(25),
				allowNull: false,
			},
		},
		{
			tableName: "usuarios",
		}
	);
	return User;
};
