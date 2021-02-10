const db = require("./index");

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

db.distrito.hasMany(db.codigoPostal, { as: "Código Postal" });
db.codigoPostal.belongsTo(db.distrito);
