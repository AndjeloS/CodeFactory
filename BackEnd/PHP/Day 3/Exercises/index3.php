<?php

$number = [11, 12 ,54, 73, 2, 47, 81, 15, 90, 77];

function biggestNumberInArray($arr) {
    $value = max($arr);
    echo $value;
}

echo "Highest number is " ,biggestNumberInArray($number)

?>