module.exports = (sequelize, Sequelize) => {
	const Envio = sequelize.define(
		"tipoDeEnvio",
		{
			id: {
				type: Sequelize.INTEGER(1),
				primaryKey: true,
				allowNull: false,
			},
			tipo: {
				type: Sequelize.STRING(25),
				allowNull: false,
			},
		},
		{
			tableName: "tipo de envio",
			timestamps: false,
		}
	);
	return Envio;
};
