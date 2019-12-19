<?php
require "conn.php";
$conn->query('SET NAMES UTF8');
$res=$conn->query("select * from detail");
$arr=array();
for($i=0;$i<$res->num_rows;$i++){
    $arr[$i]=$res->fetch_assoc();
}
echo json_encode($arr);