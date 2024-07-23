<?php
    session_start();

    if(!isset($_SESSION["user"]) && !isset($_SESSION["adm"])){ // if the session user and the session adm have no value
        header("Location: ../login.php"); // redirect the user to the home page
    }
    
    if(isset($_SESSION["user"])){ // if a session "user" is exist and have a value
        header("Location: home.php"); // redirect the user to the user page
    }

    require_once "../db_connect.php";
    require_once "../file_upload.php";

    $id = $_GET["id"]; // to take the value from the parameter "id" in the url 
    $sql = "SELECT * FROM products WHERE id = $id";
    $result = mysqli_query($connect, $sql);
    $row = mysqli_fetch_assoc($result);

    $resultSuppliers = mysqli_query($connect, "SELECT * FROM suppliers");
    $options = "";
    while($rowSupplier = mysqli_fetch_assoc($resultSuppliers)){
        if($row["fk_supplierId"] == $rowSupplier["supplierId"]){
            $options .= "<option selected value='{$rowSupplier["supplierId"]}'>{$rowSupplier["sup_name"]}</option>";
        }else {
            $options .= "<option value='{$rowSupplier["supplierId"]}'>{$rowSupplier["sup_name"]}</option>";
        }
    }

    if(isset($_POST["update"])){
        /* taking values from inputs */
        $name = $_POST["name"];
        $price = $_POST["price"];
        $picture = fileUpload($_FILES["picture"], "product");
        $supplier = isset($_POST["supplier"]) ? $_POST["supplier"] : null;

        /* checking if a picture has been selected  */
        if($_FILES["picture"]["error"] == 0){
            /* checking if the picture name of the product is not product.png to remove it from pictures folder */
            if($row["picture"] != "product.png"){
                unlink("../pictures/$row[picture]"); 
            }
            $sql = "UPDATE products SET name = '$name', price = $price, picture = '$picture[0]', fk_supplierId = $supplier WHERE id = {$id}";
        }else {
            $sql = "UPDATE products SET name = '$name', price = $price, fk_supplierId = $supplier WHERE id = {$id}";
        }

        if(mysqli_query($connect, $sql)){
            echo "<div class='alert alert-success' role='alert'>
            product has been updated, {$picture[1]}
          </div>";
          header("refresh: 3; url= index.php");
        }else {
            echo "<div class='alert alert-danger' role='alert'>
            error found, {$picture[1]}
          </div>";
        }
    }
    mysqli_close($connect);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
        <h2>Update product</h2>
        <form method="POST" enctype="multipart/form-data">
            <div class="mb-3 mt-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" name="name" value="<?= $row["name"] ?>">
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input type="number" class="form-control" id="price" aria-describedby="price" name="price" value="<?= $row["price"] ?>">
            </div>
            <div class="mb-3">
                <label for="supplier" class="form-label">Supplier</label>
                <select name="supplier" class="form-control" id="supplier">
                    <?= $options ?>
                </select>
            </div>
            <div class="mb-3">
                <label for="picture" class="form-label">picture</label>
                <input type="file" class="form-control" id="picture" aria-describedby="picture" name="picture">
            </div>
            <button name="update" type="submit" class="btn btn-primary">Update product</button>
            <a href="index.php" class="btn btn-warning">Back to home page</a>
        </form>
    </div>
    
</body>
</html>