module.exports = (sequelize, Sequelize) => {
	const Comprobate = sequelize.define(
		"tipoDeComprobante",
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
			tableName: "tipo de comprobante",
			timestamps: false,
		}
	);
	return Comprobate;
};
