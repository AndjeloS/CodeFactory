<?php

session_start();

require_once "db_connection.php";

$userSql = "SELECT * FROM users WHERE id = " . $_SESSION["user"];
$userResult = mysqli_query($conn, $userSql);
$userRow = mysqli_fetch_assoc($userResult);

$id = $_GET["id"];

$sql = "SELECT * FROM `cars` WHERE id = {$id}";

$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_assoc($result);
if($row["picture"] == "cars.jpg"){
  $style = " width:60%";
}else{
  $style = " width:80%";
}

$layout = "<div class=card style=width:100%;>
                            <img src='../images/cars/{$row["picture"]}' style=$style; class='card-img-top mt-3 ms-4' alt=...>
                            <div class=card-body>
                                <h5 class=card-title>{$row["name"]}</h5>
                                <p class=card-text>Price: {$row["price"]}€</p>
                                <p class='card-text'>Type: {$row["type"]}</p>
                                <p class='card-text'>Manufacturer: {$row["manufacturer"]}</p>
                                <p class='card-text'>Model: {$row["model"]}</p>
                                <p class='card-text'>Seats: {$row["seat_number"]}</p>
                            </div>
                        </div>";
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Details</title>
</head>
<body>



<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid" style="width: 75%;">
    <a class="navbar-brand text-white" href="../home.php">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img draggable="false" style="width: 30px;" class="me-3" src="../images/profile_pic/<?=$userRow["picture"] ?>" > <?= $userRow["first_name"] ?>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="profile.php">Profile</a></li>
            <li><a class="dropdown-item" href="logout.php?logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>




<div class="container mb-5">
    <h1 class="mt-3">Car Rental</h1>

    <div class="mt-4">
        <?= $layout
        ?>
    </div>
</div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
</body>
</html>