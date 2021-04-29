
let initDB = () => {
    const db = require("./models");
    const Role = db.role;
    const User = db.user;

    db.sequelize.sync({force: true}).then(() => {
        console.log("Sync DB");
        initData();
    });

    function initData() {
        Role.create({
            id: 1,
            name: "user"
        });
        User.create({
            username: "shopify",
            password: "$2y$10$lAXngkaTJBQvdRDw7ZNTIOZLEhU4BqsgzmhpyxYUYI.NqPuj5TJ6e"
        });
    }
};

module.exports = initDB;