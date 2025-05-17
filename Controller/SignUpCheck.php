<?php

require_once "../Model/Database_connection.php";
require_once("../Model/User_Model.php");
if (isset($_POST['submit'])) {
   
    $fname = trim($_POST['fname']);
    $lname = trim($_POST['lname']);

    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);
    $gender = trim($_POST['gender']);
    $birth_date = trim($_POST['birthdate']);
    $password = trim($_POST['password']);
    $username = trim($_POST['username']);
    $user = [
        'fname' => $fname,
        'lname' => $lname,
        'phone' => $phone,
        'email' => $email,
        'gender' => $gender,
        'birthdate' => $birth_date,
        'password' => $password,
        'username' =>$username
    ];
    if (addUser($user)) {
        // echo json_encode(array('status'=> 'success'));
        header('location: ../View/User Authentication/Login.html');

    } else {
        echo 'User Not Added';
    }

}
?>