<?php
$username = "root";
$hostname = "localhost"; #127.0.0.1
$password = "";
$dbname = "restaurant";

// define("USER_NAME", "root");
// define("HOST_NAME", "localhost");
// define("PASSWORD", "");
// define("DB_NAME", "restaurant")

$conn = mysqli_connect($hostname,$username, $password, $dbname)

//$conn = mysqli_connect(USER_NAME, HOST_NAME, PASSWORD, DB_NAME)

?>