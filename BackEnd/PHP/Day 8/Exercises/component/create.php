<?php

session_start();

require_once "db_connection.php";
require_once "file_upload_car.php";


$userSql = "SELECT * FROM users WHERE id = " . $_SESSION["admin"];
$userResult = mysqli_query($conn, $userSql);
$userRow = mysqli_fetch_assoc($userResult);


    if(isset($_POST["create"])){
        $name = $_POST["name"];
        $type = $_POST["type"];
        $model = $_POST["model"];
        $manufacturer = $_POST["manufacturer"];
        $seat_number = $_POST["seat_number"];
        $price = $_POST["price"];
        $picture = fileUpload($_FILES["picture"]);

        $sql = "INSERT INTO `cars`(`name`, `type`, `model`, `manufacturer`, `seat_number`, `price`, `picture`) VALUES ('{$name}','{$type}','{$model}','{$manufacturer}','{$seat_number}','{$price}','{$picture[0]}')";

        $result = mysqli_query($conn, $sql);

        if($result){
            echo "<div class='alert alert-success' role='alert'>
                        <h4>Car has been created!</h4>
                        <p>You will be redirected in 3 seconds!</p>
                        <hr>
                        <p>$picture[1]</p>
                    </div>";
                    #redirect to index after 3 seconds
                    header('refresh: 3; Location: ../dashboard.php');
        }else {
            echo "<div class='alert alert-danger' role='alert'>
                        Something went wrong, please try again!
                    </div>";
        }

        
        ;
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
        <h1 class="mb-5 mt-3">Create Rental</h1>
    
        <form method="POST" enctype="multipart/form-data">
            <input type="text" placeholder="insert car name" class="form-control mb-2" name="name">
            <input type="number" step="0.1" placeholder="insert price" class="form-control mb-2" name="price">
            <input type="text" placeholder="Car Type" class="form-control mb-2" name="type">
            <input type="text" placeholder="Car Model" class="form-control mb-2" name="model">
            <input type="text" placeholder="Car Manufacturer" class="form-control mb-2" name="manufacturer">
            <input type="text" placeholder="Car Seat number" class="form-control mb-2" name="seat_number" min="2" max="6">
            <span>Picture: <input type="file" class="form-control mb-2" name="picture"></span>
            <input type="submit" class="btn btn-primary" value="Create car" name="create">
        </form>
    
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
    </html>
    