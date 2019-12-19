<?php
require "conn.php";
if (isset($_POST['username'])) {
    $name = $_POST['username'];
    $phone = $_POST['phonenum'];
    $password = sha1($_POST['password']);
    $conn->query("insert register values(null,'$name','$password','$phone')");
}
    $conn->query('SET NAMES UTF8');
    $res = $conn->query("select * from register");
    $arr = array();
    for ($i = 0; $i < $res->num_rows; $i++) {
        $arr[$i] = $res->fetch_assoc();
    }
    echo json_encode($arr);