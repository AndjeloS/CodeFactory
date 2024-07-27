<?php

    require_once "connection.php";
    $sql = "SELECT * FROM `cars`";

    $result = mysqli_query($conn, $sql);


    //object(mysqli_result)#2 (5) { ["current_field"]=> int(0) ["field_count"]=> int(5) ["lengths"]=> NULL ["num_rows"]=> int(4) ["type"]=> int(0) }
    //[["id" => 1, "name" => "Hat" ]]

    $layout = "";
    if(mysqli_num_rows($result) == 0){
        $layout .= "<p>No result found!</p>";
    } else {
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        foreach($rows as $key => $row){
            $layout .= "<div class=card style=width:18rem;>
                            <img src='images/{$row["picture"]}' style='width:250px; height:300px' class='card-img-top mt-3' alt=...>
                            <div class=card-body>
                                <h5 class=card-title>{$row["name"]}</h5>
                                <p class=card-text>Price: {$row["price"]}€</p>
                                <p class='card-text'>Manufacturer: {$row["manufacturer"]}</p>
                                <p class='card-text'>Model: {$row["model"]}</p>
                                <a href='update.php?id={$row["id"]}' class='btn btn-warning'>Update</a>
                                <a href='delete.php?id={$row["id"]}' class='btn btn-danger'>Delete</a>
                            </div>
                        </div>";
        }
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Car Rental</title>
</head>
<body>
    
<div class="container">
    <h1>Rental</h1>
    <a href="create.php" class="btn btn-success mt-5">Create new car</a>
    <div class="row row-cols-auto gap-5 mt-5">
        <?=
            $layout
        ?>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>