<?php 
//connecting to our database 
//replace dbname value by your database name, 'root' by your username and '' by the assiociated password
$db = new PDO('mysql:host=localhost;dbname=car_project;charset=utf8', 'root' ,'', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);
$db->exec("SET CHARACTER SET utf8");

//we get the values contained in our post
$lastname = $_POST['lastname'];
$firstname = $_POST['firstname'];
$email = $_POST['email'];
$id = $_POST['id'];
//we have to hash the password -> could evolve to a hash more developped in future 
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

//preparing to insert data in employees table
$stmt = $db->prepare($sql = "UPDATE employees SET lastname='".$lastname."',firstname='".$firstname."',email='".$email."',passwd='".$password."'WHERE id='".$id."'");
  


if($stmt->execute()){
    // return success code to ajax if request execute correctly
    echo json_encode(array("statusCode"=>200));
}else {
    // return error code to ajax if request do not execute correctly
    echo json_encode(array("statusCode"=>201));    
}
$db = null;
?>