<?php

$username = "root";
$hostname = "localhost"; # "127.0.0.1"
$password = "";
$dbname = "crud_example_fswd22";

// define("USER_NAME", "root");
// define("HOST_NAME", "localhost");
// define("PASSWORD", "");
// define("DB_NAME", "crud_example_fswd22");

$conn = mysqli_connect($hostname, $username, $password, $dbname);

// $conn = mysqli_connect(HOST_NAME, USER_NAME, PASSWORD, DB_NAME);
