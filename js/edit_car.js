if(document.cookie.indexOf("id")==-1){
    window.location.replace("./list_car.html");
}
const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('id'))
  .split('=')[1];

var brand = $('#brand');
var model = $('#model');
var bprice = $('#buyingprice');
var bdate = $('#buyingdate');
var rprice = $('#resaleprice');
var rdate = $('#resaledate');
var rldate = $('#releasedate');



$.ajax({
    url: "./php/getcarbyid.php",
    type: "POST",
    data:{
        id:cookieValue
    },
    cache: false,
    success: function(dataResult){
        var dataResult = JSON.parse(dataResult);
        //alert(dataResult.brand) ;
        brand.val(dataResult.brand);
        model.val(dataResult.model);
        bprice.val(dataResult.buying_price);
        bdate.val(dataResult.buying_date);
        rprice.val(dataResult.resale_price);
        rdate.val(dataResult.resale_date);
        rldate.val(dataResult.release_date);
    }
});

$('#butsave').on('click', function(){
    $("#butsave").attr("disabled", "disabled");
    //getting all the data that we need to insert in our base
    var carimg = $('#carimg').val();

    //quick verification->could be improved 
    if(brand!="" && model!="" && bprice!="" && bdate!="" && rprice!=""){
        if(carimg.length != 0){
            $.ajax({
                url: "./php/edit_car.php",
                type: "post",
                //the data sent to our php file
                data: {
                    id: cookieValue,
                    brand: brand.val(),
                    model: model.val(),
                    bprice: bprice.val(),
                    bdate: bdate.val(),
                    rprice: rprice.val(),
                    rdate: rdate.val(),
                    rldate: rldate.val(),
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
                        document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        window.location.replace("./list_car.html");
                    }
                    // if request isn't successfull
                    else{
                        alert("Error occured !");
                    }
                    
                }
            });
        }else{
            $.ajax({
                url: "./php/edit_car.php",
                type: "post",
                //the data sent to our php file
                data: {
                    id: cookieValue,
                    brand: brand.val(),
                    model: model.val(),
                    bprice: bprice.val(),
                    bdate: bdate.val(),
                    rprice: rprice.val(),
                    rdate: rdate.val(),
                    rldate: rldate.val()
                },
                cache: false,
                success: function(dataResult){
                    var dataResult = JSON.parse(dataResult);
                    // if request is successfull
                    if(dataResult.statusCode==200){
                        $("#butsave").removeAttr("disabled");
                        $('#fupForm').find('input:text').val('');
                        $("#success").show();
                        alert('Data modified successfully !');
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

    }else{
        alert('Please fill all the field !');
        $("#butsave").removeAttr("disabled");
    }
});