<?php
session_start();

if (!isset($_SESSION["user"]) && !isset($_SESSION["adm"])) { // if the session user and the session adm have no value
    header("Location: login.php"); // redirect the user to the home page
}

if (isset($_SESSION["user"])) { // if a session "user" is exist and have a value
    header("Location: home.php"); // redirect the user to the user page
}

require_once "../db_connect.php";

$sql = "SELECT * FROM products";

$result = mysqli_query($connect, $sql);

$cards = "";

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $cards .= "<div>
                <div class='card' style='width: 18rem;'>
                    <img src='../pictures/{$row["picture"]}' class='card-img-top' alt='...'>
                    <div class='card-body'>
                    <h5 class='card-title'>{$row["name"]}</h5>
                    <p class='card-text'>{$row["price"]}</p>
                    <a href='update.php?id={$row["id"]}' class='btn btn-warning'>Update</a>
                    <a href='delete.php?id={$row["id"]}' class='btn btn-danger'>Delete</a>
                </div>
            </div>
          </div>";
    }
} else {
    $cards = "<p>No results found</p>";
}

mysqli_close($connect);
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP CRUD</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>

<body>

    <div class="container mt-5">
        <a class="btn btn-secondary" href="create.php">Create a product</a>
        <a class="btn btn-warning" href="../dashboard.php">Back to dashboard</a>
        <h1 class="mt-5">Products List</h1>
        <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-xs-1">
            <?= $cards ?>
        </div>
    </div>




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>

</html>