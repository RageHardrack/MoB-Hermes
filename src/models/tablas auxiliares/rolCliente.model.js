module.exports = (sequelize, Sequelize) => {
	const RolCliente = sequelize.define(
		"rolCliente",
		{
			id: {
				type: Sequelize.INTEGER(1),
				primaryKey: true,
				allowNull: false,
			},
			rol: {
				type: Sequelize.STRING(15),
				allowNull: false,
				defaultValue: "Remitente",
			},
		},
		{
			tableName: "rol del cliente",
			timestamps: false,
		}
	);
	return RolCliente;
};
