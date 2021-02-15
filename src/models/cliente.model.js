module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define(
		"clientes",
		{
			contacto: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			empresa: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			direccion: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			telefono: {
				type: Sequelize.INTEGER(9),
				allowNull: false,
			},
			otroDato: {
				type: Sequelize.STRING(150),
				allowNull: true,
			},
			email: {
				type: Sequelize.STRING(50),
				allowNull: true,
				validate: {
					isEmail: {
						msg: "El email tiene que ser un correo válido",
					},
				},
			},
			ruc: {
				type: Sequelize.BIGINT(11),
				allowNull: true,
			},
		},
		{
			tableName: "clientes",
		}
	);
	return Cliente;
};
