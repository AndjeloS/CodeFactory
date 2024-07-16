<?php
$result = "";

if (isset($_POST["submit"])){
    $firstInt = (int)$_POST["1int"];
    $secondINT = (int)$_POST["2int"];

    $total = $firstInt / $secondINT;
    $result = (int)$total;
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
    <input type="number" step="1" placeholder="Firts INT" name="1int"><br>
    <input type="number" step="1" placeholder="Second INT" name="2int"><br>
    <input type="submit" value="Submit" name="submit">
    </form>
    <p>
        <?php echo "Result is {$result}." ?>
    </p>
</body>
</html>