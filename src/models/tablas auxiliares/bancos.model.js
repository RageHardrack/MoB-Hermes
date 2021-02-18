module.exports = (sequelize, Sequelize) => {
	const Bancos = sequelize.define(
		"bancos",
		{
			banco: {
				type: Sequelize.STRING(45),
				allowNull: false,
			},
		},
		{
			tableName: "entidad financiera",
			timestamps: false,
		}
	);
	return Bancos;
};
