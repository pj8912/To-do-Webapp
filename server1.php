<?php
require 'Dbh.php';
$sql = "SELECT * FROM todo ORDER BY on_date desc";
$result = mysqli_query($conn , $sql);
$row = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($row));
