<?php

require_once "connection.php";

$id = $_GET["id"];

$sql = "SELECT * FROM `meals` WHERE id = {$id}";

$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_assoc($result);

$layout = "<div class=card style=width:100%;>
                            <img src='images/{$row["image"]}' style=width:60%; class='card-img-top mt-3' alt=...>
                            <div class=card-body>
                                <h5 class=card-title>{$row["name"]}</h5>
                                <p class=card-text>Price: {$row["price"]}€</p>
                                <p class='card-text' style=min-height:50px>Description: {$row["description"]}</p>
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

<div class="container">
    <a href="index.php"><h1>Restaurant</h1></a>

    <?= $layout
    ?>
</div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
</body>
</html>