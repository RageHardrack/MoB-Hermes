module.exports = (sequelize, Sequelize) => {
	const Status = sequelize.define(
		"status",
		{
			codigo: {
				type: Sequelize.INTEGER(3),
				allowNull: false,
			},
			status: {
				type: Sequelize.STRING(70),
				allowNull: false,
			},
		},
		{
			tableName: "status pedido",
			timestamps: false,
		}
	);
	return Status;
};
