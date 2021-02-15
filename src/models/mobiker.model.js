module.exports = (sequelize, Sequelize) => {
	const Mobiker = sequelize.define(
		"mobikers",
		{
			nombres: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			apellidos: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			telefono: {
				type: Sequelize.INTEGER(9),
				allowNull: false,
			},
			telegram: {
				type: Sequelize.STRING(50),
			},
			direccion: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			tipoDocumento: {
				type: Sequelize.STRING(50),
			},
			numeroDocumento: {
				type: Sequelize.STRING(10),
			},
			email: {
				type: Sequelize.STRING(50),
				allowNull: false,
				validate: {
					isEmail: {
						msg: "El email tiene que ser un correo válido",
					},
				},
			},
		},
		{
			tableName: "mobikers",
		}
	);
	return Mobiker;
};
