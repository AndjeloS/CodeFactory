<?php

$result = "Please enter your firstname and surname.";

if (isset($_POST["submit"])){
    $fname = $_POST["fname"];
    $sname = $_POST["sname"];

    $result = "Welcome {$fname} {$sname}";
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
    <input type="text" placeholder="Please enter your firstname." name="fname"><br>
    <input type="text" placeholder="Please enter your surname." name="sname"><br>
    <input type="submit" value="Submit" name="submit">
    </form>

    <p>
        <?php echo $result ?>
    </p>

</body>
</html>