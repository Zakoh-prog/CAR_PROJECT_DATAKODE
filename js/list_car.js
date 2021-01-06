$.ajax({
    url: "./php/list_car.php",
    type: "POST",
    cache: false,
    success: function(data){
        //putting in our table all response rows
        $('#table').html(data); 
    }
});

//saving the car id in a cookie and redirecting to the edit page
function Edit(id){
    document.cookie = "id="+id+";";
    window.location.replace("edit_car.html"); 
}

//archive the car by his id
function Archive(id){
   
    $.ajax({
        url: "./php/car_archive.php",
        type: "post",
        //the data sent to our php file
        data: {
            id:id  
        },
        cache: false,
        success: function(dataResult){
            var dataResult = JSON.parse(dataResult);
            // if request is successfull
            if(dataResult.statusCode==200){
                alert('Car archived successfully');
                document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.replace("./list_car.html");
                
            }
            // if request isn't successfull
            else{
                alert("Error occured !");
            }
            
        }
    });
        
    
    
}