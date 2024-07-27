<?php
$username = "root";
$hostname = "localhost"; #127.0.0.1
$password = "";
$dbname = "car_rental";


//create connection
$conn = mysqli_connect($hostname,$username, $password, $dbname);

//check connection
if(!$conn){
    die("Connection failed");
}

//cleaning Input

function cleanInput($input){
    $data = trim($input);
    $data = strip_tags($data);
    $data = htmlspecialchars($data);

    return $data;
};