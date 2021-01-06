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
//we have to hash the password -> could evolve to a hash more developped in future 
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

//preparing to insert data in employees table
$stmt = $db->prepare('INSERT INTO employees(lastname,firstname,email,passwd) VALUES(:lastname,:firstname,:email,:passwd)');
//setting the values for the insert request
$stmt->bindParam(':lastname',$lastname);
$stmt->bindParam(':firstname',$firstname);
$stmt->bindParam(':email',$email);
$stmt->bindParam(':passwd', $password);

if($stmt->execute()){
    // return success code to ajax if request execute correctly
    echo json_encode(array("statusCode"=>200));
}else {
    // return error code to ajax if request do not execute correctly
    echo json_encode(array("statusCode"=>201));    
}
$db = null;
?>