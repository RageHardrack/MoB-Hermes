module.exports = (sequelize, Sequelize) => {
	const Rango = sequelize.define(
		"rangos",
		{
			id: {
				type: Sequelize.INTEGER(1),
				primaryKey: true,
				allowNull: false,
			},
			rangoMoBiker: {
				type: Sequelize.STRING(15),
				allowNull: false,
			},
		},
		{
			tableName: "rangos",
			timestamps: false,
		}
	);
	return Rango;
};
