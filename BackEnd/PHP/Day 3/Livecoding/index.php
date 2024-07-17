<?php

# 1 -> 100  php

// for ($i = 1; $i <= 100; $i++) {
//     echo $i . "<br>"; # code
// }


/**
 * $i = 1     1 <= 100   echo 1
 * $i = 2     2 <= 100   echo 2
 * $i = 3     3 <= 100   echo 3
 * $i = 100   100 <= 100  echo 100
 * $i = 101   101 <= 100  false  end of the loop
 * 
 */

// $z = 1;

// while ($z <= 100) {
//     echo $z . "<br>";
//     $z++;
// }

# array 

$numbers = ["first" => 20, 33, 15, 68, 82]; # array(1,2,3,4,5)

foreach ($numbers as $key => $val) {
    echo $key . " => " . $val . "<br>";
}
