<?php
$result = "";

if (isset($_POST["submit"])){
    $tempinput = $_POST["tempinput"];

    $temp = (int)(($tempinput -32) * 5/9);

    if($temp < 5){
        $result = 
        "<div class=card style=width:18rem>
        <img src=https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg class=card-img-top style=width: 8rem>
        <div class=card-body>
          <h5 class=card-title>It is very cold!</h5>
          <p class=card-text>Temp: {$temp}°C</p>
        </div>
      </div>";

    } else if ($temp >= 6 && $temp <= 10) {
        $result = "<div class=card style=width:18rem>
        <img src=https://cdn.pixabay.com/photo/2018/06/29/23/01/ice-cubes-3506782_1280.jpg class=card-img-top>
        <div class=card-body>
          <h5 class=card-title>It is cold!</h5>
          <p class=card-text>Temp: {$temp}°C</p>
        </div>
      </div>";
    }else if ($temp >= 11 && $temp <= 15) {
        $result = "<div class=card style=width:18rem>
        <img src=https://cdn.pixabay.com/photo/2016/01/23/15/54/rain-1157644_1280.jpg class=card-img-top>
        <div class=card-body>
          <h5 class=card-title>It is pleasant!</h5>
          <p class=card-text>Temp: {$temp}°C</p>
        </div>
      </div>";
    }else if ($temp >= 16 && $temp <= 20) {
        $result = "<div class=card style=width:18rem>
        <img src=https://cdn.pixabay.com/photo/2017/06/21/21/30/plume-2428666_1280.jpg class=card-img-top>
        <div class=card-body>
          <h5 class=card-title>It is warm!</h5>
          <p class=card-text>Temp: {$temp}°C</p>
        </div>
      </div>";
    }else {
        $result = "<div class=card style=width:18rem>
        <img src=https://cdn.pixabay.com/photo/2023/03/27/09/23/sunset-7880263_1280.jpg class=card-img-top>
        <div class=card-body>
          <h5 class=card-title>It is hot!</h5>
          <p class=card-text>Temp: {$temp}°C</p>
        </div>
      </div>";
    }

}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>

<div class="container">
        <form method="post" class="mt-5">
        <span>°F: <input type="number" name="tempinput"></span>
        <input type="submit" value="Submit" name="submit">
        </form>
        <p class="mt-5">
            <?= $result;
            ?>
        </p>
    </div>

</body>
</html>

