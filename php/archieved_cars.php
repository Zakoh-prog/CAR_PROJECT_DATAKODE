<?php
//connecting to our database 
//replace dbname value by your database name, 'root' by your username and '' by the assiociated password
$db = new PDO('mysql:host=localhost;dbname=car_project;charset=utf8', 'root' ,'', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);
$db->exec("SET CHARACTER SET utf8");

//preparing to get the values contained in cars table
$sql = "SELECT * FROM cars_archive";
//putting the result of our request in a variable
$result = $db->query($sql);
if ($result->rowCount() > 0) {
    //'returning' line by line the result of the request 
    while($row = $result->fetch()) {
?>	
		<tr>
            <td><?php header("Content-type: image/jpg"); echo $row['img']; ?></td>
			<td><?=$row['brand'];?></td>
			<td><?=$row['model'];?></td>
            <td><?=$row['buying_date'];?></td>
            <td><?=$row['buying_price'];?>$</td>
            <td><?=$row['resale_price'];?>$</td>
            <td id="<?=$row['id'];?>" onclick="Delete(this.id)">Delete</td>
        </tr>
        
<?php	
    }
}
else {
    echo "0 results";
}
$db = null;
?>