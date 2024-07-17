<?php
require_once "connection.php";

$sql = "SELECT * FROM `products`"; # string only

# run the query (click go btn in phpmyadmin)

$result = mysqli_query($conn, $sql);

// var_dump($result);


// object(mysqli_result)#2 (5) { ["current_field"]=> int(0) ["field_count"]=> int(4) ["lengths"]=> NULL ["num_rows"]=> int(1) ["type"]=> int(0) }
# fetching data to ASSOCIATIVE ARRAY
# [["id" => 1, "name" => "Hat"]]

$layout = "";
if (mysqli_num_rows($result) == 0) {
    $layout .= "<p>No results found!</p>"; # $layout = $layout . "hello"
} else {
    # fetching data to ASSOCIATIVE ARRAY
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // var_dump($rows);

    foreach ($rows as $key => $row) {
        $layout .= "<div><div class='card' style='width: 18rem;'>
                        <img src='{$row["picture"]}' class='card-img-top' alt='...'>
                        <div class='card-body'>
                            <h5 class='card-title'>{$row["name"]}</h5>
                            
                            <a href='#' class='btn btn-primary'>Go somewhere</a>
                        </div>
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
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>

    <div class="container">
        <div class="row row-cols-3">
            <?= $layout ?>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>