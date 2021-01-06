$(document).ready(function(){
    $('#butsave').on('click', function(){
        $("#butsave").attr("disabled", "disabled");
        //getting all the data that we need to insert in our base
        var lastname = $('#lastname').val();
        var firstname = $('#firstname').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confpassword = $('#confpassword').val();
        //quick verification->could be improved 
        if(lastname!="" && firstname!="" && email!="" && password!="" && confpassword!=""){
            if(password == confpassword){
                $.ajax({
                    url: "./php/create_employee.php",
                    type: "post",
                    //the data sent to our php file
                    data: {
                        lastname: lastname,
                        firstname: firstname,
                        email: email,
                        password: password,
                        confpassword: confpassword
                    },
                    cache: false,
                    success: function(dataResult){
                        var dataResult = JSON.parse(dataResult);
                        // if request is successfull
                        if(dataResult.statusCode==200){
                            $("#butsave").removeAttr("disabled");
						    $('#fupForm').find('input:text').val('');
                            $("#success").show();
                            $('#success').html('Data added successfully !');
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