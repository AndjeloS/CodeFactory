<?php
$result = "";

if (isset($_POST["submit"])){
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $age = $_POST["age"];

    $name = "{$firstname} {$lastname}";
    $nameLength = strlen($firstname) + strlen($lastname);

    if ($nameLength > 5){
        $result = "<p> My name is <span  style= color:green> {$name}</span> and i am {$age} years old.</p>";
    } else {
        $result = "<p> My name is <span  style= color:red> {$name}</span> and i am {$age} years old.</p>";
    }
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form method="post">
    <p>firstname: <input type="text" name="firstname"></p>
    <p>lastname: <input type="text" name="lastname"></p>
    <p>age: <input type="number" min="1" name="age"></p>
    <input type="submit" value="Submit" name="submit">
    </form>
    <p>
        <?php 
        echo $result;
        ?>
    </p>

</body>
</html>

