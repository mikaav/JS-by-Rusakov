<?php
$data = file_get_contents('php://input');
$data= json_decode($data);
echo mt_rand($data -> min, $data -> max); 
?>