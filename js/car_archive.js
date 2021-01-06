$.ajax({
    url: "./php/archieved_cars.php",
    type: "POST",
    cache: false,
    success: function(data){
        $('#table').html(data); 
    }
});
function Delete(id){
    $.ajax({
        url: "./php/deletecarbyid.php",
        type: "POST",
        cache: false,
        data:{
            id:id
        },
        success: function(data){
            alert('Archieved car successfully deleted');
            window.location.replace("./car_archive.html"); 
        }
    });
}