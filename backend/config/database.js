import Sequalize from "sequelize";

const db = new Sequalize('expre_db', 'root', '', {
    host: "localhost",
    dialect: "mysql",

});

export default db;