$.ajax({
    url: "./php/archieved_employees.php",
    type: "POST",
    cache: false,
    success: function(data){
        $('#table').html(data); 
    }
});
function Delete(id){
    $.ajax({
        url: "./php/deleteemployeesbyid.php",
        type: "POST",
        cache: false,
        data:{
            id:id
        },
        success: function(data){
            alert('Archieved employee successfully deleted');
            window.location.replace("./employee_archive.html"); 
        }
    });
}