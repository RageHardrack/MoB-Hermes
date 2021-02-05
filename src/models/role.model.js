module.exports = (sequelize, Sequelize) => {
	const Role = sequelize.define(
		"roles",
		{
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "roles",
		}
	);
	return Role;
};
