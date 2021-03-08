<?php
  $data = file_get_contents('php://input');
  $path = "Archives/".uniqid().".rar";
  file_put_contents($path, $data);
  echo $path;
?>