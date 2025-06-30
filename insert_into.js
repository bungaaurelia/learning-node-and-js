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

    // Insert data into the table
    var sql = "INSERT INTO customers (name, email, age) VALUES ('Mike', 'mike@example.com', 35), ('Anna', 'anna@example.com', 28)";
    con.query(sql, function (err, result) {
        if (err) {
            console.log("[insert error]", err);
            return;
        }
        console.log("Data inserted into customers table.");
    });
});
