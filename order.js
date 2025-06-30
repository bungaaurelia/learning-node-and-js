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
        // Order by
          var sql = "SELECT * FROM customers ORDER BY name DESC";
            con.query(sql, function (err, result) {
                if (err) {
                    console.log("[select error]", err);
                    return;
                }
                    console.log(result);
            });
});
