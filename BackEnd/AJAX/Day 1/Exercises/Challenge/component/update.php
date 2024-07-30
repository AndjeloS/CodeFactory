<?php
require_once "db_connection.php";
require_once "file_upload_car.php";

session_start();

$userSql = "SELECT * FROM users WHERE id = " . $_SESSION["admin"];
$userResult = mysqli_query($conn, $userSql);
$userRow = mysqli_fetch_assoc($userResult);

$id = $_GET["id"];
$sql = "SELECT * from cars WHERE id = $id";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_assoc($result);

if(isset($_POST["update"])){
    $name = $_POST["name"];
    $type = $_POST["type"];
    $model = $_POST["model"];
    $manufacturer = $_POST["manufacturer"];
    $seat_number = $_POST["seat_number"];
    $price = $_POST["price"];
    $picture = fileUpload($_FILES["picture"]);

    if($_FILES["picture"]["error"] == 4){
        $sqlUpdate = "UPDATE `cars` SET `name`='{$name}',`type`='{$type}',`model`='{$model}',`manufacturer`='{$manufacturer}',`seat_number`='{$seat_number}',`price`='{$price}' WHERE id = $id";
    }else{
        if($row["picture"] != "cars.jpg"){
            unlink("./images/cars/{$row["picture"]}");
        }

        $sqlUpdate = "UPDATE `cars` SET `name`='{$name}',`type`='{$type}',`model`='{$model}',`manufacturer`='{$manufacturer}',`seat_number`='{$seat_number}',`price`='{$price}',`picture`='{$picture[0]}' WHERE id = $id";
    }

    $resultUpdate = mysqli_query($conn, $sqlUpdate);

    if($resultUpdate){
        echo "<div class='alert alert-success' role='alert'>
                        <h4>Car has been updated!</h4>
                        <p>You will be redirected in 3 seconds!</p>
                    </div>";
    }else{
        echo "<div class='alert alert-danger' role='alert'>
                        Something went wrong, please try again!
                    </div>";
    }


    header("refresh: 3; url=index.php");
}

?>

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <title>Cars</title>
    </head>
    <body>


<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid" style="width: 75%;">
    <a class="navbar-brand text-white" href="../dashboard.php">Home</a>

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
            <li><a class="dropdown-item" href="component/logout.php?logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


        
    <div class="container">
        <h1 class="mb-5 mt-3">Update Rental</h1>
    
        <form method="POST" enctype="multipart/form-data">
            <input type="text" placeholder="Car name" class="form-control mb-2" name="name" value="<?= $row["name"] ?>">
            <input type="number" step="0.1" placeholder="insert price" class="form-control mb-2" name="price" value="<?= $row["price"] ?>">
            <input type="text" placeholder="Car Type" class="form-control mb-2" name="type" value="<?= $row["type"] ?>">
            <input type="text" placeholder="Car Model" class="form-control mb-2" name="model" value="<?= $row["model"] ?>">
            <input type="text" placeholder="Car Manufacturer" class="form-control mb-2" name="manufacturer" value="<?= $row["manufacturer"] ?>">
            <input type="text" placeholder="Car Seat number" class="form-control mb-2" name="seat_number" min="2" max="6" value="<?= $row["seat_number"] ?>">
            <span>Picture: <input type="file" class="form-control mb-2" name="picture"></span>
            <input type="submit" class="btn btn-primary" value="Update car" name="update">
        </form>
    
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
    </html>
    