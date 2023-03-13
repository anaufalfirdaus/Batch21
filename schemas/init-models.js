var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _countries = require("./countries");
var _customers = require("./customers");
var _departments = require("./departments");
var _employees = require("./employees");
var _job_history = require("./job_history");
var _jobs = require("./jobs");
var _locations = require("./locations");
var _orders = require("./orders");
var _orders_detail = require("./orders_detail");
var _products = require("./products");
var _regions = require("./regions");
var _regions1 = require("./regions1");
var _shippers = require("./shippers");
var _suppliers = require("./suppliers");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var job_history = _job_history(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var orders_detail = _orders_detail(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var regions1 = _regions1(sequelize, DataTypes);
  var shippers = _shippers(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);

  orders.belongsToMany(products, { as: 'ordet_prod_id_products', through: orders_detail, foreignKey: "ordet_order_id", otherKey: "ordet_prod_id" });
  products.belongsToMany(orders, { as: 'ordet_order_id_orders', through: orders_detail, foreignKey: "ordet_prod_id", otherKey: "ordet_order_id" });
  locations.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(locations, { as: "locations", foreignKey: "country_id"});
  employees.belongsTo(departments, { as: "department_department", foreignKey: "department_id"});
  departments.hasMany(employees, { as: "employees", foreignKey: "department_id"});
  job_history.belongsTo(departments, { as: "department", foreignKey: "department_id"});
  departments.hasMany(job_history, { as: "job_histories", foreignKey: "department_id"});
  departments.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(departments, { as: "departments", foreignKey: "manager_id"});
  employees.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(employees, { as: "employees", foreignKey: "manager_id"});
  job_history.belongsTo(employees, { as: "employee", foreignKey: "employee_id"});
  employees.hasMany(job_history, { as: "job_histories", foreignKey: "employee_id"});
  employees.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(employees, { as: "employees", foreignKey: "job_id"});
  job_history.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(job_history, { as: "job_histories", foreignKey: "job_id"});
  departments.belongsTo(locations, { as: "location", foreignKey: "location_id"});
  locations.hasMany(departments, { as: "departments", foreignKey: "location_id"});
  countries.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(countries, { as: "countries", foreignKey: "region_id"});
  products.belongsTo(categories, { as: "prod_cate", foreignKey: "prod_cate_id"});
  categories.hasMany(products, { as: "products", foreignKey: "prod_cate_id"});
  orders.belongsTo(customers, { as: "order_cust", foreignKey: "order_cust_id"});
  customers.hasMany(orders, { as: "orders", foreignKey: "order_cust_id"});
  orders_detail.belongsTo(orders, { as: "ordet_order", foreignKey: "ordet_order_id"});
  orders.hasMany(orders_detail, { as: "orders_details", foreignKey: "ordet_order_id"});
  orders_detail.belongsTo(products, { as: "ordet_prod", foreignKey: "ordet_prod_id"});
  products.hasMany(orders_detail, { as: "orders_details", foreignKey: "ordet_prod_id"});
  orders.belongsTo(shippers, { as: "order_ship", foreignKey: "order_ship_id"});
  shippers.hasMany(orders, { as: "orders", foreignKey: "order_ship_id"});
  products.belongsTo(suppliers, { as: "prod_supr", foreignKey: "prod_supr_id"});
  suppliers.hasMany(products, { as: "products", foreignKey: "prod_supr_id"});

  return {
    categories,
    countries,
    customers,
    departments,
    employees,
    job_history,
    jobs,
    locations,
    orders,
    orders_detail,
    products,
    regions,
    regions1,
    shippers,
    suppliers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
