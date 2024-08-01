<?php

$arr = [];
$date = date("l jS \of F Y");
array_push($arr, $date);

echo json_encode($arr);
