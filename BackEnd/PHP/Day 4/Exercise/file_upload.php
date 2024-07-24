<?php

    function fileUpload($image)
    {
        if($image["error"]==4){
            $image_name = "meal.jpg";
            $message = "No image has been selected, but you can add one later.";
        }else{
            $checkIfImage = getimagesize($image["tmp_name"]);

            $message = $checkIfImage ? "Ok" : "Not an image";
        }

        if($message == "Ok"){
            $ext = strtolower(pathinfo($image["name"], PATHINFO_EXTENSION));
            $image_name = uniqid("") . "." . $ext;
            $destination = "images/{$image_name}";

            move_uploaded_file($image["tmp_name"], $destination);
        }

        return[$image_name, $message];
    }


?>