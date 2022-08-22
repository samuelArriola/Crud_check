<?php
$con = mysqli_connect("localhost", "root","", "hola");
mysqli_set_charset($con,"utf8");
if (!$con) {
    echo "error";
}
?>