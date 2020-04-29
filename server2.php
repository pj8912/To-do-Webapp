<?php

$conn = mysqli_connect('localhost','root', '', 'todo');

if(isset($_SERVER['REQUEST_METHOD']) == 'POST'){


$task = htmlentities($_POST['tasks']);


$sql = mysqli_query($conn, "INSERT INTO todo(tasks) VALUES('$task')");


if($sql)
{
  header("Location: index.php");
  exit();

}
// echo 'works';
}
 ?>
