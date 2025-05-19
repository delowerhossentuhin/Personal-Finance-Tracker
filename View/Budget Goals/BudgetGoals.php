<?php
session_start();
if($_SESSION['status']){
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget Goals</title>
    <link rel="stylesheet" href="../../CSS/Budget Goals/BudgetGoals.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
</head>
<body>
    <header class="Header">
        <img src="../../CSS/Dashboard/images/Main_Logo.png" alt="" class="logo">
        <ul>
            <li class="user-info">
                <p class="username"><?= $_SESSION['username'] ?></p>
                <p class="designation">Designation</p>
            </li>
        </ul>
        <img class="Uimg" src="../../CSS/Dashboard/images/tuhin.jpg" alt="User Image"/>
        <img class="Unotify" src="../../CSS/Dashboard/images/notifications.png" alt="Notification Sign"/>
        <div class="search-bar">
          <input type="text" placeholder="Search for..." />
          <i class="fa fa-search"></i>
        </div>
      </header>
      <div class="bodyclass">
        <div class="setBudget">
            <h1 class="title">Set Your Budget</h1>'
            <hr class="line">
            <h2 class="title">Monthly Spending Limits</h2>
            <input type="text" class="setTargetText">
           <a href="#" class="setTargetBTN">Set Target</a>
           <div class="catg" id="catg-container">
            <div class="addCatg" onclick="addCategory()">
                <i class="fa fa-plus"></i>
            </div>
           </div>
           <h1 class="pTitle">Progress of Each Category</h1>
           <div class="progress_bar">

           </div>
           <div class="setting">
            <h1 class="alertTitle">Alert Setting</h1>
            <ul class="alerts">
                <li class="eachAlert">
                    <label class="eachAlertLabel">Enable Alerts</label>
                    <label class="toggle">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </li>
                <li class="eachAlert">
                    <label class="eachAlertLabel">Push Notification</label>
                    <label class="toggle">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </li>
                <li class="eachAlert">
                    <label class="eachAlertLabel">Email Alerts</label>
                    <label class="toggle">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </li>
            </ul>
           </div>
        </div>
      </div>
      <script src="../../JS/Budget Goals/BudgetGoals.js"></script>
</body>
</html>
<?php
}
else{
    header('location: ../../View/User Authentication/Login.html');
}
?>