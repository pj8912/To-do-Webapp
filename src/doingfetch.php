<?php

$conn = mysqli_connect('localhost', 'root', '','todo');

$sql = "SELECT * FROM doing ORDER by on_date DESC";

$result = mysqli_query($conn,$sql);

$row = mysqli_fetch_all($result, MYSQLI_ASSOC);

exit(json_encode($row));
