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
    var sql = "INSERT INTO customers (name, email, age) VALUES ?";
    var values = [
        ['Tim', 'tim@example.com', 25],
        ['Sara', 'sara@example.com', 22],
        ['Luke', 'luke@example.com', 30]
    ]
    con.query(sql, [values], function (err, result) {
        if (err) {
            console.log("[insert error]", err);
            return;
        }
        console.log("Records inserted into customers table: " + result.affectedRows);
    });
});
