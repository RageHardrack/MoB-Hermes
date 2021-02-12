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
			facturacion: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
		},
		{
			tableName: "clientes",
		}
	);
	return Cliente;
};
