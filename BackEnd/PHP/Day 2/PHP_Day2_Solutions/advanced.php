<?php
    // styling is left out here!!

    // 1- Create a function that can convert °F in °C and show the result on the screen.
    function FtoC($f){
        return ($f - 32) * 5/9;
    }
    $temp = FtoC(32);
    echo $temp."<br>";

    // 2- You can play with the results creating conditionals and showing on the screen a 
    // different img and message depending on the temp:
    if($temp <= 5){
        echo "very cold.";
    }
    elseif($temp <= 10){
        echo "cold.";
    }
    elseif($temp <= 15){
        echo "pleasent.";
    }
    elseif($temp <= 20){
        echo "warm.";
    }
    else{
        echo "hot.";
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
    
</body>
</html>