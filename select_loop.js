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

          var sql = "SELECT * FROM customers";
            con.query(sql, function (err, result, fields) {
                if (err) {
                    console.log("[select error]", err);
                    return;
                }
                var i;
                for (i = 0; i < result.length; i++) {
                    console.log(result[i].name);
                }
            });
});
