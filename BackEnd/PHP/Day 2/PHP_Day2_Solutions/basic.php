<?php
    // Exercise 1
    // Create a PHP script which will accept two parameters from the form (name and surname). 
    // The user must insert name and surname into the form to get the output: "Welcome Name Surname!" 
    // otherwise you will output the message: please insert your name, or please insert your surname.

    // isset() checks if the key is set, meaning if its sent e.g. isset($_GET["fName"])
    // checks if we have "?fName=" is somewhere in the url. However, it doesnt check if
    // there is value, for that we can use !empty($_GET["fName"]), the ! before empty means
    // not, so "not empty": if we have a value.
    if(isset($_GET["fName"]) && isset($_GET["lName"])){
        if(empty($_GET["fName"])){
            echo "please insert your first name";
        }
        elseif(empty($_GET["lName"])){
            echo "please insert your last name";
        }
        else{
            echo "Welcome $_GET[fName] $_GET[fName]!";
        }
    }
    else{
        echo "please fill in the form.";
    }

    echo "<br><br>";

    // Exercise 2
    // Create a function which takes two integer parameters - divide them and output the result on the screen.

    // here we use a return instead of directly echo, although thats also possible
    function divide($n1, $n2){
        return $n1 / $n2;
    }

    // using return means we have to echo it now to bring it to the screen
    // divide() would now return (hold) whatever we returned so it equal to
    // "echo $n1 / $n2" but more dynamic.
    echo divide(5,5);


    echo "<br><br>";

    // Exercise 3
    // Make a function that will accept 3 parameters, which are the grades from Math, Physics and English. 
    // then make the calculation and print them on the screen. Make sure that the variables are numbers.
    // E.g. If you put the following grades 3, 4, 5 the result should be:
    // Sum:12
    // Average: 4

    function grades($math, $phys, $eng){
        // making sure they are numbers can be done in many ways, one is to check
        // if they are numeric which means numbers 1,2,3,.. but also strings like "1","2",...
        // as they are still purely numeric
        if(is_numeric($math) && is_numeric($phys) && is_numeric($eng)){
            $sum = $math + $phys + $eng;
            $avg = $sum / 3;
            echo "Sum: $sum <br>Avg: $avg<br>";
            // if we dont want to echo it we can return muliple values by using an array
            return [$sum, $avg];
        }
        else{
            echo "input must be numeric!";
            return "input must be numeric!";
        }
    }

    grades(5,6,7);
    // this will look weird on the screen as each time we call the function the echo from within
    // the function also runs, comment the echo (line 58) to make it a bit nicer.
    echo "Sum: ".grades(5,6,7)[0]."<br>";
    echo "Avg: ".grades(5,6,7)[1]."<br>";


    echo "<br><br>";

    // Exercise 4
    // Create a function that calculates the area and volume of a box.
    // Formulas:
    // area = width x height
    // volume = width x height x depth
    // Pass three different numbers as arguments and get calculated results using the return statement.
    // You should get the following results:
    // The area of the box is: 14
    // The volume of the box is: 70

    function dimensions($w, $h, $d){
        // same as in the previous example we could check if the passed arguments are numeric.
        // i'll skip it here but normally you should always check your inputs
        $area = $w * $h;
        $volume = $area * $d;
        // same as before we return an array, to access it we use e.g. dimensions(1,2,3)[0] for the area
        return [$area, $volume];
    }

    echo "The area of the box is: ".dimensions(1,2,3)[0]."<br>";
    echo "The volume of the box is: ".dimensions(1,2,3)[1]."<br>";


    echo "<br><br>";

    // Exercise 5
    // Create a function that will return the number of minutes, in hours and minutes. 
    // The function should accept only one argument.
    // E.g. If we call the function and pass the number of minutes 200 we should get the message 
    // "200 minutes = 3 hour(s) and 20 minute(s)."

    function convertMin($min){
        // the floor() method rounds the result down to the next whole number e.g. 3.412 becomes 3
        $hours = floor($min / 60);
        // the modulus (%) returns the remainder of a division e.g. 5/3=1 with 2 rest. so 5%3 returns 2
        $rest = $min % 60;
        return "$min minutes = $hours hour(s) and $rest minute(s).";
    }

    echo convertMin(200);


    echo "<br><br>";

    // Exercise 6
    // Within HTML!
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Exercise 1 -->

    <div>
        Exercise 1:
        <!-- default method is GET so we dont have to specify it -->
        <form action="">
            <!-- the name-attribute will be the key to access it later
            e.g. name="fName" will be accessible with $_GET["fName"] -->
            <input type="text" name="fName">
            <input type="text" name="lName">
            <input type="submit" value="submit">
        </form>
    </div>

    <!-- // Exercise 6
    // Create a form with input fields for your firstname, lastname and age. Extract the values from each 
    // input field and display them all in a separate div. Use the POST method.
    // If the length of your name is larger than 5 characters, change the text colour to green. Otherwise, 
    // change the text-colour to red.Now extend with adding a new input field "hobbies".  -->
    <form action="" method="post">
        <input type="text" name="firstName">
        <input type="text" name="lastName">
        <input type="number" name="age">
        <input type="submit" value="submit" name="submit">
    </form>

    <div style="background-color: #ddd;">
        <?php
            if(isset($_POST["submit"])){
                // again, at best check if they are also not empty (!empty()) but here for ease its left out
                if(isset($_POST["firstName"]) && isset($_POST["lastName"]) && isset($_POST["age"])){
                    // to set the color we first make a default, in this case "red"
                    // if some condition is met, we change it, here its the lenght of the first name
                    // long way:
                    $color = "red";
                    if(strlen($_POST["firstName"]) > 5){
                        $color = "green";
                    }
                    // short way with ternary operator: (uncomment and comment the above)
                    // $color = strlen($_POST["firstName"]) > 5 ? "green" : "red";

                    echo "<p style='color: $color'>$_POST[firstName]</p>";
                    echo "<p>$_POST[lastName]</p>";
                    echo "<p>$_POST[age]</p>";

                }
                else{
                    echo "please fill in the form.";
                }
            }
        ?>
    </div>
</body>
</html>