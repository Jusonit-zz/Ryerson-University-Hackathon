<?php
include "db.php";
function verify_credentials($user, $pass)
{
    $db = new DB();
    $conn = $db->get_connection();
    $result = $conn->query("SELECT * FROM profiles WHERE username = '$user' AND password = '$pass'");
    $role = $result->num_rows > 0 ? $result->fetch_array()['role'] : 0;
    $conn->close();
    return $role;
}
?>