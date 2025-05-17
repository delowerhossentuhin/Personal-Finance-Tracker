<?php
require_once "../Model/Database_connection.php";
require_once("../Model/User_Model.php");
if (isset($_POST['submit'])) {

    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $user = [
        'username' => $username,
        'password' => $password
    ];
    if (login($user)) {
        // echo json_encode(array('status'=> 'success'));
        
         header('location:../View/Dashboard/Dashboard.html');

    } else {
        echo 'Wrong username or password';
    }

}
?>