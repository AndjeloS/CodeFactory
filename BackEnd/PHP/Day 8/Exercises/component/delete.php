<?php

require_once "db_connection.php";

$id = $_GET["id"];
$sql = "SELECT picture FROM cars WHERE id = $id";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

if($row["picture"] != "cars.jpg"){
    unlink("./images/cars/{$row["picture"]}");
}

$sqlDelete = "DELETE FROM `cars` WHERE id = $id";
mysqli_query($conn, $sqlDelete);
header("Location: index.php");

?>