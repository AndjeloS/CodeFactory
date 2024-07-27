<?php
require_once "db_connection.php";

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



<div class="container mt-5">
    <h1 class="w-50 mt-4 mx-auto">Login</h1>

    <form action="" enctype="multipart/form-data" class="w-50 mt-4 mx-auto">
        <div class="mb-3">
            <label for="mail" class="form-label">Mail Address:</label>
            <input id="mail" type="text" class="form-control" name="mail" placeholder="Insert mail address" value="">
            <p class="text-danger"></p>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input id="password" type="password" class="form-control" name="password" placeholder="Insert password">
            <p class="text-danger"></p>
        </div>
        <div class="mb-3">
        <button type="submit" class="btn btn-primary" name="btn-login">Login</button>
        </div>
    </form>
</div>




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>