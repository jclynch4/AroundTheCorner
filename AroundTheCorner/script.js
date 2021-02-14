window.onload = function() {
	/*
	<php
	$servername = "107.180.1.16";
	$username = "group62021";
	$password = "2021group6";

	// Create connection
	$conn = new mysqli($servername, $username, $password);

	// Check connection
	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	}
	echo "Connected successfully";
	>*/
	document.getElementById("createAccount").onclick = function createAccount() {
		console.log("hi mom");

		let name = document.getElementById("name").innerHTML
		let age = document.getElementById("age").innerHTML
		let email = document.getElementById("email").innerHTML
		let username = document.getElementById("username").innerHTML
		let password = document.getElementById("password").innerHTML
		let location = document.getElementById("location").innerHTML
		let admin = document.getElementById("admin").innerHTML

		/* mySQL connectivity sample */

		var mySQLpointer, connObj;

		mySQLpointer = require("mysql");

		connObj = mySQLpointer.createConnection( 
					{ 
						host:     "107.180.1.16", 
						user:     "group62021",
						password: "2021group6",
						database: "group62021"
					} );

	// To Be Completed in Class 

		connObj.connect(function(error){
			if (error){
				console.log("Connection Error: " + error.stack);
			}
			else{
				console.log("Connected to database. ID == " + connObj.threadId);
			}
		});

		let sqlStmt;

		sqlStmt = "SELECT * FROM Menu";

		let prices={}

		connObj.query(sqlStmt,
			function(err, dataSet, colSet) {
				if(err)
					throw err;

				console.log("Dataset: ", dataSet);

				for (i=0; i<dataSet.length; i++){
					/*console.log("\nItem: " + dataSet[i].MenuItem);*/
					/*prices.i = dataSet[i].MenuItem
					prices.i[i]= dataSet[i].Price*/
					prices[dataSet[i].MenuItem] = dataSet[i].Price;
				}
				console.log(prices);
				console.log(prices["Latte"]);
				/*for (i=0; i<5; i++){
					console.log(prices);
				}*/
			});

//document.write('<select name="course_name" id="course_name"><option value="CIS 345 - Business Info Systems II">CIS 345 - Business Info Systems II</option><option value="CIS 405 - Business Intelligence">CIS 405 - Business Intelligence</option><option value="CIS 425 - Web Design and Development">CIS 425 - Web Design and Development</option></select>')
//document.getElementById("menu").innerHTML = 
/*
		let mysql = require('mysql');
		//import mysql from 'mysql';
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

		let sql = "INSERT INTO Buyers (name, age, email, username, password, location, admin) VALUES ('name', '1', 'email', 'username', 'password', 'location', 'True')";  
		con.query(sql, function (err, result) {  
			if (err) throw err;  
			console.log("1 record inserted");  
		});  
		});
		}*/
}
}