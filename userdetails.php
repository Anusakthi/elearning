<?php
   // getting all values from the HTML form
   if(isset($_POST['submit']))
    {
        $username = $_POST['username'];
        $password = $_POST['password'];
    }
      
        if(!empty( $username)||!empty( $password))
        {
    // database details
    $host = "localhost";
    $dbusername = "ud";
    $dbpassword = "";
    $dbname = "ud";

    // creating a connection
    $con = mysqli_connect($host, $dbusername, $dbpassword, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // using sql to create a data entry query
    $sql = "INSERT INTO ud(username, password) VALUES ( '$username', '$password')";
  
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        echo "Entries added!";
    }
    
  
    // close connection
    mysqli_close($con);
        }
?>
