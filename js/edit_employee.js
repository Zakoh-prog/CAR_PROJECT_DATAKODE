if(document.cookie.indexOf("id")==-1){
    window.location.replace("./list_car.html");
}
const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('id'))
  .split('=')[1];

var lastname = $('#lastname');
var firstname = $('#firstname');
var email = $('#email');
var password = $('#password');
var confpassword = $('#confpassword');

$.ajax({
    url: "./php/getemployeebyid.php",
    type: "POST",
    data:{
        id:cookieValue
    },
    cache: false,
    success: function(dataResult){
        var dataResult = JSON.parse(dataResult);
        //alert(dataResult.brand) ;
        lastname.val(dataResult.lastname);
        firstname.val(dataResult.firstname);
        email.val(dataResult.email);
        password.val(dataResult.passwd);
        confpassword.val(dataResult.passwd);
    }
});

$(document).ready(function(){
    $('#butsave').on('click', function(){
        $("#butsave").attr("disabled", "disabled");
        //getting all the data that we need to insert in our base
        
        //quick verification->could be improved 
        if(lastname.val()!="" && firstname.val()!="" && email.val()!="" && password.val()!="" && confpassword.val()!=""){
            if(password.val() == confpassword.val()){
                $.ajax({
                    url: "./php/edit_employee.php",
                    type: "post",
                    //the data sent to our php file
                    data: {
                        id:cookieValue,
                        lastname: lastname.val(),
                        firstname: firstname.val(),
                        email: email.val(),
                        password: password.val(),
                        confpassword: confpassword.val()
                    },
                    cache: false,
                    success: function(dataResult){
                        var dataResult = JSON.parse(dataResult);
                        // if request is successfull
                        if(dataResult.statusCode==200){
                            $("#butsave").removeAttr("disabled");
						    $('#fupForm').find('input:text').val('');
                            $("#success").show();
                            alert('Data updated successfully !');
                            document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                            window.location.replace("./list_employee.html");
                        }
                        // if request isn't successfull
                        else{
                            alert("Error occured !");
                        }
                        
                    }
                });
            }else{
                alert('Password confirmation doesn\'t match with password');
                $("#butsave").removeAttr("disabled");
            }
        }else{
            alert('Please fill all the field !');
            $("#butsave").removeAttr("disabled");
		}
    });


});