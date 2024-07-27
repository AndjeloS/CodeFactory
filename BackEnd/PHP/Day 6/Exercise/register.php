<?php
require_once "component/db_connection.php";
require_once "component/file_upload_user.php";

$error = false;

$fname = $lname = $date_of_birth = $email = $password = $picture = '';
$fnameError = $lnameError = $date_of_birthError = $emailError = $passwordError = $pictureError = '';

if(isset($_POST['btn-signup'])){
    $fname = cleanInput($_POST['first_name']);

    $lname = cleanInput($_POST['last_name']);

    $date_of_birth = cleanInput($_POST['date_of_birth']);

    $email = cleanInput($_POST['email']);

    $password = cleanInput($_POST['password']);

    $picture = fileUpload($_FILES["picture"]);

    #VALIDATION
    #firstname validation - can't be empty

    if(empty($fname)){
        $error = true;
        $fnameError = "First name can't be empty!";
    }elseif(strlen($fname) < 3){
        $error = true;
        $fnameError = "First name can't be less than 2 chars!";
    }elseif(!preg_match("/^[a-zA-Z\s]+$/", $fname)){
        $error = true;
        $fnameError = "First name must contain only letters and spaces!";
    }

    if(empty($lname)){
        $error = true;
        $lnameError = "Last name can't be empty!";
    }elseif(strlen($lname) < 3){
        $error = true;
        $lnameError = "Last name can't be less than 2 chars!";
    }elseif(!preg_match("/^[a-zA-Z\s]+$/", $lname)){
        $error = true;
        $lnameError = "Last name must contain only letters and spaces!";
    }

    if(empty($date_of_birth)){
        $error = true;
        $date_of_birthError = "Date of birth can't be empty!";
    }

    if(empty($email)){
        $error = true;
        $emailError = "Email is required!";
    }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $error = true;
        $emailError = "Please type a valid email!";
    }else{
        $searchIfEmailExists = "SELECT email FROM users WHERE email = '$email'";
        $result = mysqli_query($conn, $searchIfEmailExists);
        if(mysqli_num_rows($result) != 0){
            $error = true;
            $emailError = "Email already exists!";
        }
    }

    if(empty($password)){
        $error = true;
        $passwordError = "Password can't be empty!";
    }elseif(strlen($password) < 6){
        $error = true;
        $lnameError = "Password can't be less than 6 chars!";
    }


    if(!$error){
        #insert 
        $password = hash('sha256', $password);

        $sql = "INSERT INTO `users`(`first_name`, `last_name`, `password`, `date_of_birth`, `email`, `picture`) VALUES ('{$fname}','{$lname}','{$password}','{$date_of_birth}','{$email}','{$picture[0]}')";

        $result = mysqli_query($conn, $sql);

        if($result){
            echo "<div class='alert alert-success text-center' role='alert'>
                        <h4 class='alert-heading'>Registration completed!</h4>
                        <p>You will be redirected in 3 seconds.</p>
                        <hr>
                        <p class='mb-0'>$picture[1]</p>
                    </div>";
            $fname = $lname = $date_of_birth = $email = '';

        }else{
            #show error
            echo "<div class='alert alert-danger text-center' role='alert'>
            <h3>Something went wrong, please try again!</h3>
            </div>";
        }  
    }
}




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Registration-Form</title>
</head>
<body>
    
<div class="container mt-5">
    <h1>Rental Registration</h1>

    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="POST" enctype="multipart/form-data" class="w-50">
        <div class="mb-3">
            <label for="first_name" class="form-label">First name:</label>
            <input id="first_name" type="text" class="form-control" name="first_name" placeholder="Insert first name" value="<?= $fname ?>">
            <p class="text-danger"><?= $fnameError ?></p>
        </div>
        <div class="mb-3">
            <label for="last_name" class="form-label">Last name:</label>
            <input id="last_name" type="text" class="form-control" name="last_name" placeholder="Insert last name" value="<?= $lname ?>">
            <p class="text-danger"><?= $lnameError ?></p>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input id="email" type="email" class="form-control" name="email" placeholder="Insert email address" value="<?= $email ?>">
            <p class="text-danger"><?= $emailError ?></p>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input id="password" type="password" class="form-control" name="password" placeholder="Insert password">
            <p class="text-danger"><?= $passwordError ?></p>
        </div>
        <div class="mb-3">
            <label for="date_of_birth" class="form-label">Date of birth:</label>
            <input id="date_of_birth" type="date" class="form-control" name="date_of_birth" value="<?= $date_of_birth ?>">
            <p class="text-danger"><?= $date_of_birthError ?></p>
        </div>
        <div class="mb-3">
            <label for="picture" class="form-label">Profile picture:</label>
            <input id="picture" type="file" class="form-control" name="picture">
            <p class="text-danger"><?= $pictureError ?></p>
        </div>
        <div class="mb-3">
        <button type="submit" class="btn btn-success" name="btn-signup">Register</button>
        </div>
    </form>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>