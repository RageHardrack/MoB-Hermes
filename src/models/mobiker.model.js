module.exports = (sequelize, Sequelize) => {
	const Mobiker = sequelize.define(
		"mobikers",
		{
			nombres: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			apellidos: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			// distrito: {
			// 	type: Sequelize.STRING(25),
			// 	allowNull: false,
			// },
		},
		{
			tableName: "mobikers",
		}
	);
	return Mobiker;
};
