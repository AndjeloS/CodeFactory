<?php

require_once "connection.php";
require_once "file_upload.php";

    if(isset($_POST["create"])){
        $name = $_POST["name"];
        $price = $_POST["price"];
        $desc = $_POST["description"];
        $image = fileUpload($_FILES["image"]);

        $sql = "INSERT INTO `meals`(`name`, `price`, `image`, `description`) VALUES ('{$name}','{$price}','{$image[0]}','{$desc}')";

        $result = mysqli_query($conn, $sql);

        if($result){
            echo "<div class='alert alert-success' role='alert'>
                        Meal has been created!
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
    <title>Restaurant</title>
</head>
<body>
    
<div class="container">
    <h1 class="mb-5">Restaraunt</h1>

    <form method="POST" enctype="multipart/form-data">
        <input type="text" placeholder="insert meal name" class="form-control mb-2" name="name">
        <input type="number" step="0.1" placeholder="insert price" class="form-control mb-2" name="price">
        <input type="text" placeholder="insert description" class="form-control mb-2" name="description">
        <span>Image: <input type="file" class="form-control mb-2" name="image"></span>
        <input type="submit" class="btn btn-primary" value="Create meal" name="create">
    </form>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
