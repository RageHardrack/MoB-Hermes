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
			telefono: {
				type: Sequelize.INTEGER(9),
				allowNull: false,
			},
			direccion: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			distrito: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			otroDato: {
				type: Sequelize.STRING(150),
				allowNull: false,
			},
			tipoCarga: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			modalidad: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			comprobante: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			facturado: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			rol: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		},
		{
			tableName: "clientes",
		}
	);
	return Cliente;
};
