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
        // Where clause to select data from the table
        var name_search = 't%';
        var id_search = 1;
          var sql = "SELECT * FROM customers WHERE name LIKE ? OR id = ?";
            con.query(sql, [name_search, id_search], function (err, result, fields) {
                if (err) {
                    console.log("[select error]", err);
                    return;
                }
                    console.log(result);
            });
});
