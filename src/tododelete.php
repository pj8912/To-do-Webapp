<?php

include '../db.php';

$postdata = file_get_contents("php://input");

$req = json_decode($postdata);

$data = $req->delete;

$sql = "DELETE FROM todo WHERE id = '$data' ";

mysqli_query($conn, $sql);

mysqli_close($conn);
