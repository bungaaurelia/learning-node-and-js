const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});

// Connect to the MySQL database
con.connect(function(err) {
    if (err) {
        console.log("[connection error]", err);
        return;
    }
    console.log("Connected to MySQL Database!");

    // Create a table if it doesn't exist
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
});
