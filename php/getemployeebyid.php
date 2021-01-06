<?php
//connecting to our database 
//replace dbname value by your database name, 'root' by your username and '' by the assiociated password
$db = new PDO('mysql:host=localhost;dbname=car_project;charset=utf8', 'root' ,'', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);
$db->exec("SET CHARACTER SET utf8");

$sql = "SELECT * FROM employees WHERE id=".$_POST['id'];
$result = $db->query($sql);
//$result=$result->fetch()
while($row = $result->fetch()) {
    $row['passwd']=password_verify($row['passwd'],PASSWORD_DEFAULT);
    echo json_encode($row);
}



$db=null;
?>