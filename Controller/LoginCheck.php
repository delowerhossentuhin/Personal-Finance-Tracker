<?php
require_once "../Model/Database_connection.php";
require_once("../Model/User_Model.php");
session_start();
if (isset($_POST['submit'])) {

    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $user = [
        'username' => $username,
        'password' => $password
    ];
    if (login($user)) {
        // echo json_encode(array('status'=> 'success'));
        $_SESSION['status'] = true;
        $_SESSION['username'] = $username;
        setcookie('status', 'true', time() + 3000, '/');
        $con=getConnection();
        $sql = "SELECT UserType FROM user WHERE username='$username'";
        $result= mysqli_query($con, $sql);
        $row=mysqli_fetch_assoc($result);
        $type=$row['UserType'];
        $_SESSION['UserType']=$type;
        if($type=='user'){
            header('location:../View/Dashboard/Dashboard.php');
        }
        else {
            header('location:../View/Admin Panel/AdminPanel.php');
        }
        

    } else {
        echo 'Wrong username or password';
    }

}
?>