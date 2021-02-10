const config = require("../config/db.config");

const Sequelize = require("sequelize");
// Conexión a la Base de Datos
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.pedido = require("./pedido.model")(sequelize, Sequelize);
db.mobiker = require("./mobiker.model")(sequelize, Sequelize);
db.cliente = require("./cliente.model")(sequelize, Sequelize);
db.distrito = require("./distrito.model")(sequelize, Sequelize);
db.codigoPostal = require("./codigoPostal.model")(sequelize, Sequelize);
db.rango = require("./rango.model")(sequelize, Sequelize);

// Associations
// require("./associations");
// db.role.belongsToMany(db.user, {
// 	through: "user_roles",
// 	foreignKey: "roleId",
// 	otherKey: "userId",
// });
// db.user.belongsToMany(db.role, {
// 	through: "user_roles",
// 	foreignKey: "userId",
// 	otherKey: "roleId",
// });

// db.distrito.hasMany(db.codigoPostal, { as: "Código Postal" });
// db.codigoPostal.belongsTo(db.distrito);

db.ROLES = ["administrador", "operador", "auditor", "cliente", "mobiker"];

module.exports = db;
