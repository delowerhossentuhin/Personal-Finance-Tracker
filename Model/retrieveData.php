<?php
session_start();
require_once('Database_connection.php');
header('Content-Type: application/json');

$con = getConnection();
$username = $_SESSION['username'];

// Get user_id
$sql_user = "SELECT user_id FROM user WHERE username = '$username'";
$result_user = mysqli_query($con, $sql_user);
$row_user = mysqli_fetch_assoc($result_user);
$userid = $row_user['user_id'];

// Month ordering
$month_order = "'January','February','March','April','May','June','July','August','September','October','November','December'";

// Fetch Balance
$sql_balance = "SELECT month, balance FROM balance WHERE user_id = '$userid' ORDER BY FIELD(month, $month_order)";
$result_balance = mysqli_query($con, $sql_balance);
$balance_labels = $balance_data = [];
while ($row = mysqli_fetch_assoc($result_balance)) {
    $balance_labels[] = $row['month'];
    $balance_data[] = (float)$row['balance'];
}

// Fetch Saving
$sql_saving = "SELECT month, amount FROM saving WHERE user_id = '$userid' ORDER BY FIELD(month, $month_order)";
$result_saving = mysqli_query($con, $sql_saving);
$saving_labels = $saving_data = [];
while ($row = mysqli_fetch_assoc($result_saving)) {
    $saving_labels[] = $row['month'];
    $saving_data[] = (float)$row['amount'];
}

// Fetch Income
$sql_income = "SELECT month, amount FROM income WHERE user_id = '$userid' ORDER BY FIELD(month, $month_order)";
$result_income = mysqli_query($con, $sql_income);
$income_labels = $income_data = [];
while ($row = mysqli_fetch_assoc($result_income)) {
    $income_labels[] = $row['month'];
    $income_data[] = (float)$row['amount'];
}

// Fetch Expense
$sql_expense = "SELECT month, amount FROM expense WHERE user_id = '$userid' ORDER BY FIELD(month, $month_order)";
$result_expense = mysqli_query($con, $sql_expense);
$expense_labels = $expense_data = [];
while ($row = mysqli_fetch_assoc($result_expense)) {
    $expense_labels[] = $row['month'];
    $expense_data[] = (float)$row['amount'];
}

// Return all as JSON
echo json_encode([
    'balance' => ['labels' => $balance_labels, 'data' => $balance_data],
    'saving'  => ['labels' => $saving_labels,  'data' => $saving_data],
    'income'  => ['labels' => $income_labels,  'data' => $income_data],
    'expense' => ['labels' => $expense_labels, 'data' => $expense_data]
]);
?>
