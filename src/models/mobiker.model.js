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
				allowNull: true,
				validate: {
					isEmail: {
						msg: "El email tiene que ser un correo válido",
					},
				},
			},
			genero: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			banco: {
				type: Sequelize.STRING(45),
				allowNull: true,
			},
			tipoCuenta: {
				type: Sequelize.STRING(20),
				allowNull: true,
			},
			numeroCuentaBancaria: {
				type: Sequelize.BIGINT(14),
				allowNull: true,
			},
			equipo: {
				type: Sequelize.STRING(15),
				allowNull: false,
			},
			biciEnvios: {
				type: Sequelize.INTEGER(6),
				defaultValue: 0,
			},
			kilometros: {
				type: Sequelize.FLOAT(5),
				defaultValue: 0,
			},
			CO2Ahorrado: {
				type: Sequelize.FLOAT(4),
				defaultValue: 0,
			},
			ruido: {
				type: Sequelize.FLOAT(3),
				defaultValue: 0,
			},
			status: {
				type: Sequelize.INTEGER(1),
				allowNull: true,
			},
			fechaNacimiento: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			fechaIngreso: {
				type: Sequelize.DATE,
				allowNull: true,
			},
		},
		{
			tableName: "mobikers",
		}
	);
	return Mobiker;
};
