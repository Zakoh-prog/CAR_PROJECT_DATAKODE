<?php 
//connecting to our database 
//replace dbname value by your database name, 'root' by your username and '' by the assiociated password
$db = new PDO('mysql:host=localhost;dbname=car_project;charset=utf8', 'root' ,'', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);
$db->exec("SET CHARACTER SET utf8");

//we get the values contained in our post
$brand = $_POST['brand'];
$model = $_POST['model'];
$bprice = $_POST['bprice'];
//converting html date to sql date
$bdate = date('Y-m-d H:i:s', strtotime($_POST['bdate']));
$rprice = $_POST['rprice'];


if(isset($_POST['carimg'])){
    //preparing to insert data in cars table
    $stmt1 = $db->prepare('INSERT INTO cars(brand,model,buying_price,buying_date,resale_price,img) VALUES(:brand,:model,:bprice,:bdate,:rprice,:img)');
    //setting the values for the insert request
    $stmt1->bindParam(':brand',$brand);
    $stmt1->bindParam(':model',$model);
    $stmt1->bindParam(':bprice',$bprice);
    $stmt1->bindParam(':bdate', $bdate);
    $stmt1->bindParam(':rprice', $rprice);
    $stmt1->bindParam(':img', $_POST['carimg']);
    if($stmt1->execute()){
        // return success code to ajax if request execute correctly
        echo json_encode(array("statusCode"=>200));
    }else {
        // return error code to ajax if request do not execute correctly
        echo json_encode(array("statusCode"=>202));    
    }
}else{
    //preparing to insert data in cars table
    $stmt2 = $db->prepare('INSERT INTO cars(brand,model,buying_price,buying_date,resale_price) VALUES(:brand,:model,:bprice,:bdate,:rprice)');
    //setting the values for the insert request
    $stmt2->bindParam(':brand',$brand);
    $stmt2->bindParam(':model',$model);
    $stmt2->bindParam(':bprice',$bprice);
    $stmt2->bindParam(':bdate', $bdate);
    $stmt2->bindParam(':rprice', $rprice);
    if($stmt2->execute()){
        // return success code to ajax if request execute correctly
        echo json_encode(array("statusCode"=>200));
    }else {
        // return error code to ajax if request do not execute correctly
        echo json_encode(array("statusCode"=>202));    
    }
}
$db = null;
?>