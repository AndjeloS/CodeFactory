<?php

    session_start();
    if(isset($_SESSION["user"])){
      header("Location: home.php");
      exit();
    }

    if(isset($_SESSION["admin"])){
      header("Location: dashboard.php");
      exit();
    }


    require_once "db_connection.php";


    $error = false;
    $email = $emailError = $passwordError = $info = "";
    if(isset($_POST["login-btn"])){
      $email = cleanInput($_POST["email"]);
      $password = cleanInput($_POST["password"]);

      if(empty($email)){
        $error = true;
        $emailError = "Email is required!";
      }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $error = true;
        $emailError = "Not a valid email!";
      }


      if(empty($password)){
        $error = true;
        $passwordError = "Password is required!";
      }

      if(!$error){
        $password = hash("sha256", $password);

        $sql = "SELECT * FROM `users` WHERE email = '$email' AND password = '$password'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        if(mysqli_num_rows($result) == 1){
            #you can login
            #check whoever logged in is a user or admin
            if($row["status"] =="admin"){
              #send to dashboard
              $_SESSION["admin"] = $row["id"];
              header("Location: ../dashboard.php");
            }else{
              #send you to index
              $_SESSION["user"] = $row["id"];
              header("Location: ../home.php");
            }
        }else{
          $info = "<div class='alert alert-danger text-center' role='alert'>
            <h3>Incorrect credintials, please try again!</h3>
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
    <title>Login</title>
</head>
<body>


<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid" style="width: 75%;">
    <a class="navbar-brand text-white" href="../index.php">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img draggable="false" style="width: 20px;" src="../images/navbar/navbar_user.png" >
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="login.php">Login</a></li>
            <li><a class="dropdown-item" href="register.php">Signup</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div>
  <?= $info ?>
</div>


<div class="container mt-5">
    <h1 class="w-50 mt-4 mx-auto">Login</h1>

    <form method="POST" action="<?= htmlspecialchars($_SERVER["PHP_SELF"]) ?>" enctype="multipart/form-data" class="w-50 mt-4 mx-auto" autocomplete="off">
        <div class="mb-3">
            <label for="mail" class="form-label">Mail Address:</label>
            <input id="mail" type="text" class="form-control" name="email" placeholder="something@example.com" value="<?= $email ?>">
            <p class="text-danger"><?= $emailError ?></p>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input id="password" type="password" class="form-control" name="password" placeholder="Password">
            <p class="text-danger"><?= $passwordError ?></p>
        </div>
        <div class="mb-3">
            <input type="submit" value="Login" name="login-btn" class="btn btn-primary">
        </div>
    </form>
</div>




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>