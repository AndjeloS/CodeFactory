<?php
$result = "";

if (isset($_POST["submit"])){
    $totalMinutes = $_POST["totalminutes"];
    $hour = $totalMinutes / 60;
    $hourInt = (int)$hour;
    $minutes = (int)$totalMinutes % 60;
    
    $result = "{$totalMinutes} minutes = {$hourInt} hour(s) and {$minutes} minute(s).";
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
    <p>Total Minutes: <input type="number" min="1" name="totalminutes"></p>
    <input type="submit" value="Submit" name="submit">
    </form>
    <p>
        <?php echo $result ?>
    </p>
</body>
</html>