<?php
$result = "";
$avg = "";

if (isset($_POST["submit"])){
    $math = (int)$_POST["math"];
    $physics = (int)$_POST["physics"];
    $english = (int)$_POST["english"];

    $total = $math + $physics + $english;
    $result = (int)$total;
    $avg = (int)$total / 3;
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
    <p>Math: <input type="number" step="1" max="5" min="1" name="math"></p>
    <p>Physics: <input type="number" step="1" max="5" min="1" name="physics"></p>
    <p>English: <input type="number" step="1" max="5" min="1" name="english"></p>
    <input type="submit" value="Submit" name="submit">
    </form>
    <p>
        <?php echo "Sum: {$result}" ?><br>
        <?php echo "Avg: {$avg}" ?>
    </p>
</body>
</html>