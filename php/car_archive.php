<?php 
//connecting to our database 
//replace dbname value by your database name, 'root' by your username and '' by the assiociated password
$db = new PDO('mysql:host=localhost;dbname=car_project;charset=utf8', 'root' ,'', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);
$db->exec("SET CHARACTER SET utf8");

$id=$_POST['id'];

$stmt1 = $db->prepare('INSERT INTO cars_archive SELECT * FROM cars WHERE id='.$id.';');
$stmt2 = $db->prepare('DELETE FROM cars WHERE id='.$id.';');

if($stmt1->execute() && $stmt2->execute()){

    // return success code to ajax if request execute correctly
    echo json_encode(array("statusCode"=>200));
}else {
    // return error code to ajax if request do not execute correctly
    echo json_encode(array("statusCode"=>201));    
}
$db = null;
?>