module.exports = (sequelize, Sequelize) => {
	const Modalidad = sequelize.define(
		"modalidad",
		{
			id: {
				type: Sequelize.INTEGER(1),
				primaryKey: true,
				allowNull: false,
			},
			tipo: {
				type: Sequelize.STRING(15),
				allowNull: false,
			},
		},
		{
			tableName: "modalidad",
			timestamps: false,
		}
	);
	return Modalidad;
};
