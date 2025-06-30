const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});

con.connect(function(err) {
    if (err) {
        console.log("[connection error]", err);
        return;
    }
    console.log("Connected to MySQL Database!");

    con.query("CREATE DATABASE IF NOT EXISTS nodeDB", function (err, result) {
        if (err) {
            console.log("[mysql error]", err);
            return;
        }
        console.log("Database created or already exists");
    });
});
