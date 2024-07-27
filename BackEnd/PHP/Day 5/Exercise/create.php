<?php

require_once "connection.php";
require_once "file_upload.php";

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
                        Car has been created!
                    </div>";
        }else {
            echo "<div class='alert alert-danger' role='alert'>
                        Something went wrong, please try again!
                    </div>";
        }

        #redirect to index after 3 seconds
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
        
    <div class="container">
        <h1 class="mb-5">Create Rental</h1>
    
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
    