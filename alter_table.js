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

    // Alter the table to add a new column if it doesn't exist
    var sql = "ALTER TABLE customers ADD COLUMN age INT";
    con.query("SHOW COLUMNS FROM customers LIKE 'age'", function(err, result) {
        if (err) {
            console.log("[column check error]", err);
            return;
        }
        if (result.length === 0) {
            sql = "ALTER TABLE customers ADD age INT";
            con.query(sql, function (err, result) {
                if (err) {
                    console.log("[column addition error]", err);
                    return;
                }
                console.log("Column 'age' added to the table.");
            });
        } else {
            console.log("Column 'age' already exists.");
        }
    });
});
