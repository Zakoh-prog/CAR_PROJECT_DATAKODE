<?php 
//connecting to our database 
//replace dbname value by your database name, 'root' by your username and '' by the assiociated password
$db = new PDO('mysql:host=localhost;dbname=car_project;charset=utf8', 'root' ,'', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);
$db->exec("SET CHARACTER SET utf8");

//we get the values contained in our post
$id = $_POST['id'];
$brand = $_POST['brand'];
$model = $_POST['model'];
$bprice = $_POST['bprice'];
//converting html date to sql date
$bdate = date('Y-m-d H:i:s', strtotime($_POST['bdate']));
$rprice = $_POST['rprice'];
$rdate = date('Y-m-d H:i:s', strtotime($_POST['rdate']));
$rldate = date('Y-m-d H:i:s', strtotime($_POST['rldate']));

if(isset($_POST['carimg'])){
    //preparing to insert data in cars table
    $stmt1 = $db->prepare($sql = "UPDATE cars SET brand='".$brand."',model='".$model."',buying_price='".$bprice."',buying_date='".$bdate."',resale_price='".$rprice."',resale_date='".$rdate."',release_date='".$rldate."',img='".$_POST['carimg']."'WHERE id='".$id."'");
    if($stmt1->execute()){
        // return success code to ajax if request execute correctly
        echo json_encode(array("statusCode"=>200));
    }else {
        // return error code to ajax if request do not execute correctly
        echo json_encode(array("statusCode"=>202));    
    }
}else{
    //preparing to insert data in cars table
    $stmt2 = $db->prepare($sql = "UPDATE cars SET brand='".$brand."',model='".$model."',buying_price='".$bprice."',buying_date='".$bdate."',resale_price='".$rprice."',resale_date='".$rdate."',release_date='".$rldate."'WHERE id='".$id."'");
    if($stmt2->execute()){
        // return success code to ajax if request execute correctly
        echo json_encode(array("statusCode"=>200));
    }else {
        // return error code to ajax if request do not execute correctly
        echo json_encode(array("statusCode"=>202));    
    }
}
