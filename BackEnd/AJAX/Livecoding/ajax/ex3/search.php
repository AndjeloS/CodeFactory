<?php

require_once "db_connect.php";

// var_dump($_GET);

$value = $_GET['search'];


$sql = "SELECT * FROM  users WHERE first_name LIKE '$value%' OR last_name LIKE '$value%'";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($rows);