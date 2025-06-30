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

    var sql = "INSERT INTO customers (name, email, age) VALUES ('Emily', 'emily@example.com', 35)";
    con.query(sql, function (err, result) {
        if (err) {
            console.log("[insert error]", err);
            return;
        }
        console.log(result);
    });
});
