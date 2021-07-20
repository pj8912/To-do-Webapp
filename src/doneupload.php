<?php

include '../db.php';

$postdata = file_get_contents("php://input");

$req = json_decode($postdata);

$id = $req->id;

mysqli_begin_transaction($conn);


            
$sql  = mysqli_query($conn, "SELECT * FROM doing WHERE id = '$id' ");
$row = mysqli_fetch_assoc($sql);
$task = $row['tasks'];

mysqli_query($conn, "INSERT INTO done(tasks) VALUES('$task')");

mysqli_query($conn, "DELETE FROM doing WHERE id = '$id' ");

mysqli_commit($conn);

mysqli_rollback($conn);

mysqli_close($conn);
