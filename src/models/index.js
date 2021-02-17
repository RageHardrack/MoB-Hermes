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

// Tablas Principales
db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.pedido = require("./pedido.model")(sequelize, Sequelize);
db.mobiker = require("./mobiker.model")(sequelize, Sequelize);
db.cliente = require("./cliente.model")(sequelize, Sequelize);

// Tablas Auxiliares
db.distrito = require("./tablas auxiliares/distrito.model")(
	sequelize,
	Sequelize
);
db.codigoPostal = require("./tablas auxiliares/codigoPostal.model")(
	sequelize,
	Sequelize
);
db.rango = require("./tablas auxiliares/rango.model")(sequelize, Sequelize);
db.carga = require("./tablas auxiliares/carga.model")(sequelize, Sequelize);
db.comprobante = require("./tablas auxiliares/comprobante.model")(
	sequelize,
	Sequelize
);
db.modalidad = require("./tablas auxiliares/modalidad.model")(
	sequelize,
	Sequelize
);
db.formaDePago = require("./tablas auxiliares/formaDePago.model")(
	sequelize,
	Sequelize
);
db.rolCliente = require("./tablas auxiliares/rolCliente.model")(
	sequelize,
	Sequelize
);
db.envio = require("./tablas auxiliares/envio.model")(sequelize, Sequelize);

// Associations
db.role.belongsToMany(db.user, {
	through: "user_roles",
	foreignKey: "roleId",
	otherKey: "userId",
});
db.user.belongsToMany(db.role, {
	through: "user_roles",
	foreignKey: "userId",
	otherKey: "roleId",
});

// Relaciones Auxiliares
db.distrito.hasMany(db.codigoPostal, { as: "Código Postal" });
db.codigoPostal.belongsTo(db.distrito);

// Relaciones con la Tabla Clientes
db.distrito.hasOne(db.cliente);
db.cliente.belongsTo(db.distrito);

db.comprobante.hasOne(db.cliente);
db.cliente.belongsTo(db.comprobante);

db.rolCliente.hasMany(db.cliente);
db.cliente.belongsTo(db.rolCliente);

db.carga.hasMany(db.cliente);
db.cliente.belongsTo(db.carga);

db.formaDePago.hasMany(db.cliente);
db.cliente.belongsTo(db.formaDePago);
// Fin relaciones de Clientes

// Relaciones de MoBikers
db.distrito.hasOne(db.mobiker);
db.mobiker.belongsTo(db.distrito);
// Fin relaciones de MoBikers

// Relaciones de Pedidos
db.distrito.hasOne(db.pedido);
db.pedido.belongsTo(db.distrito);

db.mobiker.hasOne(db.pedido);
db.pedido.belongsTo(db.mobiker);

db.cliente.hasOne(db.pedido);
db.pedido.belongsTo(db.cliente);

db.modalidad.hasOne(db.pedido);
db.pedido.belongsTo(db.modalidad);

db.envio.hasOne(db.pedido);
db.pedido.belongsTo(db.envio);
// Fin relaciones de Pedidos

db.ROLES = ["administrador", "operador", "auditor", "cliente", "mobiker"];

module.exports = db;
