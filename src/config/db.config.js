module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "mob2021",
	DB: "mobtest",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
