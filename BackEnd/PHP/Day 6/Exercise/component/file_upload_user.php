<?php


    function fileUpload($picture)
    {
        if($picture["error"]==4){
            $picture_name = "user.jpg";
            $message = "No picture has been selected, but you can add one later.";
        }else{
            $checkIfImage = getimagesize($picture["tmp_name"]);

            $message = $checkIfImage ? "Ok" : "Not an image";
        }

        if($message == "Ok"){
            $ext = strtolower(pathinfo($picture["name"], PATHINFO_EXTENSION));
            $picture_name = uniqid("") . "." . $ext;
            $destination = "./images/{$picture_name}";

            move_uploaded_file($picture["tmp_name"], $destination);
        }

        return[$picture_name, $message];
    }


?>
