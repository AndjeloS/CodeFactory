<?php
    session_start();

    if(!isset($_SESSION["user"]) && !isset($_SESSION["admin"])){
        header("Location: login.php");
        exit();
    }

    require_once "db_connection.php";
    require_once "file_upload_user.php";

    if(isset($_SESSION["admin"])){
        $session = $_SESSION["admin"];
        $backTo = "../dashboard.php";
    }else {
        $session = $_SESSION["user"];
        $backTo = "../home.php";
    }
    
    $sql = "SELECT * FROM users WHERE id = $session";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    if(isset($_POST["edit"])){
        $fname = cleanInput($_POST['first_name']);

        $lname = cleanInput($_POST['last_name']);

        $date_of_birth = cleanInput($_POST['date_of_birth']);

        $email = cleanInput($_POST['email']);

        $picture = fileUpload($_FILES["picture"]);

        if($_FILES["picture"]["error"] == 4){
            $sqlUpdate = "UPDATE users SET first_name = '$firstname', last_name = '$lname', date_of_birth = '$date_of_birth', email ='$email' WHERE id = $session";
        }else{
            if($row["picture"] != 'user.jpg'){
                unlink("../images/profile_pic/".$row["picture"]);  
            }
            $sqlUpdate = "UPDATE users SET first_name = '$fname', last_name = '$lname', date_of_birth = '$date_of_birth', email ='$email', picture = '$picture[0]' WHERE id = $session";
        }
        $result = mysqli_query($conn, $sqlUpdate);

            if($result){
                header("Locatrion: " . $backTo);
            }
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Car Rental</title>
</head>
<body>



<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid" style="width: 75%;">
    <a class="navbar-brand text-white" href="<?= $backTo ?>">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img draggable="false" style="width: 30px;" src="../images/profile_pic/<?=$row["picture"]?>" class="me-3"><?= $row["first_name"]?>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="component/logout.php?logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>



    
<div class="container mt-5">
    <h1 class="mt-3 mb-5">Profile</h1>

    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="POST" enctype="multipart/form-data" class="w-50">

        <div class="mb-3">
            <label for="first_name" class="form-label">First name:</label>
            <input id="first_name" type="text" class="form-control" name="first_name" placeholder="Insert first name" value="<?= $row["first_name"] ?>">
        </div>

        <div class="mb-3">
            <label for="last_name" class="form-label">Last name:</label>
            <input id="last_name" type="text" class="form-control" name="last_name" placeholder="Insert last name" value="<?= $row["last_name"] ?>">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input id="email" type="email" class="form-control" name="email" placeholder="Insert email address" value="<?= $row["email"] ?>">
        </div>

        <div class="mb-3">
            <label for="date_of_birth" class="form-label">Date of birth:</label>
            <input id="date_of_birth" type="date" class="form-control" name="date_of_birth" value="<?= $row["date_of_birth"] ?>">
        </div>

        <div class="mb-3">
            <label for="picture" class="form-label">Profile picture:</label>
            <input id="picture" type="file" class="form-control" name="picture">
        </div>

        <div class="mb-3">
            <button type="submit" class="btn btn-success" name="edit">Update Profile</button>
        </div>

    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>