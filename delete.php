<?php

// if(isset($_SERVER['REQUEST_METHOD']) == 'GET')

 if($_GET['id'])
{
  require 'Dbh.php';
  $id = $_GET['id'];
  $sql   = "DELETE FROM todo WHERE id = '$id' ";
  mysqli_query($conn, $sql);
  header('location: index.php');
  exit();

}
?>
