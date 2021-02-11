module.exports = (sequelize, Sequelize) => {
	const FormaDePago = sequelize.define(
		"formaDePago",
		{
			id: {
				type: Sequelize.INTEGER(1),
				primaryKey: true,
				allowNull: false,
			},
			pago: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
		},
		{
			tableName: "forma de pago",
			timestamps: false,
		}
	);
	return FormaDePago;
};
