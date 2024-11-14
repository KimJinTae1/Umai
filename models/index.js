const { Sequelize, DataTypes } = require("sequelize");

// 데이터베이스 연결 설정
// exports const sequelize = new Sequelize("testDB", "root", "1234", {
//   host: "localhost",
//   dialect: "mysql",
// });

const sequelize = new Sequelize("testDB", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
