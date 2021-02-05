module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define(
		"clientes",
		{
			contacto: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			empresa: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			distrito: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "clientes",
		}
	);
	return Cliente;
};
