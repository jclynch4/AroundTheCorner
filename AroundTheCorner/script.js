window.onload = function() {
	document.getElementById("createAccount").onclick = function createAccount() {
		console.log("hi mom");

		let name = document.getElementById("name").innerHTML
		let age = document.getElementById("age").innerHTML
		let email = document.getElementById("email").innerHTML
		let username = document.getElementById("username").innerHTML
		let password = document.getElementById("password").innerHTML
		let location = document.getElementById("location").innerHTML
		let admin = document.getElementById("admin").innerHTML

		let mysql = require('mysql');  
		console.log("hi mom");
		var con = mysql.createConnection({  
		host: "107.180.1.16",
		port: "3306",  
		user: "group62021",  
		password: "2021group6",  
		database: "group62021"  
		});  

		con.connect(function(err) {  
		if (err) throw err;  
		console.log("Connected!");

		let sql = "INSERT INTO Buyers (name, age, email, username, password, location, payment, admin) VALUES ('name', '1', 'email', 'username', 'password', 'location', 'True')";  
		con.query(sql, function (err, result) {  
			if (err) throw err;  
			console.log("1 record inserted");  
		});  
		});
		}
}