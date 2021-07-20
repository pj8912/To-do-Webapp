<?php

include '../db.php';

$postdata = file_get_contents("php://input");

$req = json_decode($postdata);

$data = $req->data;

$sql = "INSERT INTO todo(tasks) VALUES('$data')";

mysqli_query($conn, $sql);

mysqli_close($conn);
