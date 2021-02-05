module.exports = (sequelize, Sequelize) => {
	const Mobiker = sequelize.define(
		"mobikers",
		{
			nombres: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			apellidos: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			distrito: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "mobikers",
		}
	);
	return Mobiker;
};
