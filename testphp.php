<?php
$myJSON = '{ "name":"John", "age":30, "city":"New York" }';
$data = $_POST["data"];
$file = fopen("updated1.json", "w+");
echo "myFunc(".$data.");";
?>