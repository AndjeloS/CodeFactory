<?php

require_once "db_connect.php";


$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];

$sql = "INSERT INTO `users`(`first_name`, `last_name`, `email`) VALUES ('$firstName','$lastName','$email')";

if(mysqli_query($conn, $sql)){
    echo "Success, user has been added";
}
