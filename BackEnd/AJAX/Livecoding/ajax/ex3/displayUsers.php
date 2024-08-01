<?php

require_once "db_connect.php";

$sql = "SELECT * FROM users";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($rows);