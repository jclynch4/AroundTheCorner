var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "107.180.1.16:3306",  
user: "group62021",  
password: "2021group6",  
database: "group62021"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
buyerid = getElementById("idBuyers").innerhtml
var sql = "INSERT INTO Buyers (idBuyers, idCart, name, age, email, username, password, location, payment, admin) VALUES (buyerid, 'Ajeet Kumar', '27', 'Allahabad')";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});  