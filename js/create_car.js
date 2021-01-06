$(document).ready(function(){
    $('#butsave').on('click', function(){
        $("#butsave").attr("disabled", "disabled");
        //getting all the data that we need to insert in our base
        var brand = $('#brand').val();
        var model = $('#model').val();
        var bprice = $('#buyingprice').val();
        var bdate = $('#buyingdate').val();
        var rprice = $('#resaleprice').val();
        var carimg = $('#carimg').val();

        //quick verification->could be improved 
        if(brand!="" && model!="" && bprice!="" && bdate!="" && rprice!=""){
            if(carimg.length != 0){
                $.ajax({
                    url: "./php/create_car.php",
                    type: "post",
                    //the data sent to our php file
                    data: {
                        brand: brand,
                        model: model,
                        bprice: bprice,
                        bdate: bdate,
                        rprice: rprice,
                        carimg: carimg
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
                $.ajax({
                    url: "./php/create_car.php",
                    type: "post",
                    //the data sent to our php file
                    data: {
                        brand: brand,
                        model: model,
                        bprice: bprice,
                        bdate: bdate,
                        rprice: rprice
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
            }

        }else{
            alert('Please fill all the field !');
            $("#butsave").removeAttr("disabled");
        }
    });
});
