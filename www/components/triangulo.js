// This is a JavaScript file
$(document).on('click','#ver',function(){
  var ld1 = $('#ld1').val();
  var ld2 = $('#ld2').val();
  var ld3 = $('#ld3').val();
  var not = $('not').val();

  if (ld1=ld2 , ld2=ld3){
     $('equilatero').show();
  if(ld2=ld3,ld1!=ld2){
    $('isoceles').show();
  if(ld1=ld3,ld1 != ld2){
    $('isoceles').show();
  if(ld1=ld2,ld3 != ld2){
    $('isoceles').show();
if(ld1!= ld2,ld3 != ld2,ld1!=ld3){
  $('escaleno').show();
}
  }
    }
      }
        } else{
     $('#erro').show();
     alert("erro impossivel de formar um triangulo")
  }
});

    