<?php
$volume = "";
$area = "";

if (isset($_POST["submit"])){
    $width = $_POST["width"];
    $height = $_POST["height"];
    $depth = $_POST["depth"];

    $area = $width * $height;
    $volume = $width * $height * $depth;
    
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
    <p>width: <input type="number" min="1" name="width"></p>
    <p>height: <input type="number" min="1" name="height"></p>
    <p>depth: <input type="number" min="1" name="depth"></p>
    <input type="submit" value="Submit" name="submit">
    </form>
    <p>
        <?php echo "Area: {$area}" ?><br>
        <?php echo "Volume: {$volume}" ?>
    </p>
</body>
</html>

