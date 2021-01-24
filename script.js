
var selectColor={
  red:0,
  green:0,
  blue:0
}

var brushSize=50;


$(document).mousedown(function (event) { 
  
  event.stopPropagation();
  event.preventDefault();
  $('.brush').addClass('rotateInfinite')

})

$(".red").mousedown(function (event) { 
  
  event.stopPropagation();
  event.preventDefault();
  $('.brush').addClass('rotateInfinite')
  selectColor.red+=50;
  if (selectColor.red>250){
    selectColor.red=250;}
    $('.brush').attr('style',  " top :" + (event.pageY ) + "px; left :" + (event.pageX ) + "px; border-color:rgb("+selectColor.red+','+selectColor.green+","+selectColor.blue+')' )
  

})
$(".green").mousedown(function (event) { 
  
  event.stopPropagation();
  event.preventDefault();
  $('.brush').addClass('rotateInfinite')
  selectColor.green+=50;
  if (selectColor.green>250){
    selectColor.green=250;}
    $('.brush').attr('style', " top :" + (event.pageY ) + "px; left :" + (event.pageX ) + "px; border-color:rgb("+selectColor.red+','+selectColor.green+","+selectColor.blue+')' )
  

})
$(".blue").mousedown(function (event) { 
  
  event.stopPropagation();
  event.preventDefault();
  $('.brush').addClass('rotateInfinite')
  selectColor.blue+=50;
  if (selectColor.blue>250){
    selectColor.blue=250;}
    $('.brush').attr('style',  " top :" + (event.pageY ) + "px; left :" + (event.pageX) + "px; border-color:rgb("+selectColor.red+','+selectColor.green+","+selectColor.blue+')' )
  

})


$(document).mouseup(function (event) { 
  
  event.stopPropagation();
  event.preventDefault();
  $('.brush').removeClass('rotateInfinite')

})


$(document).mousemove(event=>{
  event.stopPropagation();
  event.preventDefault();
  $('.brush').attr("style", " top :" + (event.pageY) + "px; left :" + (event.pageX) + "px; border-color:rgb("+selectColor.red+','+selectColor.green+","+selectColor.blue+')')  


})

//washes the brush to black
$('.wash').on("click", event=>{
  event.preventDefault();
  event.stopPropagation();
  selectColor={red:0, green:0, blue:0}
  $('.brush').attr("style", " top :" + (event.pageY) + "px; left :" + (event.pageX ) + "px; border-color:rgb("+selectColor.red+','+selectColor.green+","+selectColor.blue+')')  


})
$('.wallwash').on("click", event=>{
  event.preventDefault();
  event.stopPropagation();
  $('.wall').html('');

})

//change brush sizes
$('.smallBrush').on("click", event=>{
  event.preventDefault();
  event.stopPropagation();
  $('.brush').removeClass('brushLarge')

  $('.brush').addClass('brushSmall')
  brushSize=20
})
$('.mediumBrush').on("click", event=>{
  event.preventDefault();
  event.stopPropagation();
  $('.brush').removeClass('brushLarge')
  $('.brush').removeClass('brushSmall')

  
  brushSize=50
})
$('.largeBrush').on("click", event=>{
  event.preventDefault();
  event.stopPropagation();
  $('.brush').addClass('brushLarge')
  $('.brush').removeClass('brushSmall')

  
  brushSize=80
})

//tuens the brush on and off
$('.wall').mousedown(event=>{
  if($('.brush').attr('value')==="on"){
    $('.brush').attr('value',"off")

  }
  else{
    $('.brush').attr('value',"on")
}

})

//mouse move paints on wall    
$('.wall').mousemove(event=>{
  $('.brush').attr("style", " top :" + (event.pageY) + "px; left :" + (event.pageX) + "px; border-color:rgb("+selectColor.red+','+selectColor.green+","+selectColor.blue+')')  

  var currentColor = currentColor;
  event.preventDefault();
  event.stopPropagation();
  if ($('.brush').attr('value')==="on"){
    
      
   
    var newStroke = $("<div>")
    $(newStroke).addClass('brushStroke')
    $(newStroke).attr("style","height:"+brushSize+"px; width:"+brushSize+"px;background-color:rgba("+ selectColor.red +","+selectColor.green+","+ selectColor.blue+",.2);top :" + (event.pageY) + "px; left :" + (event.pageX ) + "px;" )
    $('.wall').append(newStroke)
    
  }
})

$(".wallchange").on("click", event=>{
  event.preventDefault();
  event.stopPropagation();
  var red= Math.floor(Math.random()*250);
  var green= Math.floor(Math.random()*250);
  var blue= Math.floor(Math.random()*250);
  $('.wall').attr("style","background-color:rgb("+red+","+green+","+blue+")")


})


$(".square").on("click", event=>{
  $('.brushStroke').addClass('squareStroke');
  $('.brushStroke').removeClass('rotateStroke');
  var strokeArray = $('.brushStroke');

  for(i=0; i<strokeArray.length; i++){
    var theStyle = $(strokeArray[i]).attr('style')
        theStyle=theStyle.split('transform');
        theStyle=theStyle[0]
        $(strokeArray[i]).attr('style',theStyle);
      }
})

$(".round").on("click", event=>{
  $('.brushStroke').removeClass('squareStroke')
  $('.brushStroke').removeClass('rotateStroke');
  var strokeArray = $('.brushStroke');
  for(i=0; i<strokeArray.length; i++){
    var theStyle = $(strokeArray[i]).attr('style')
        theStyle=theStyle.split('transform');
        theStyle=theStyle[0]
        $(strokeArray[i]).attr('style',theStyle);
      }
})

$(".rotator").on("click", event=>{
  $('.brushStroke').addClass('rotateStroke')
  $('.brushStroke').removeClass('squareStroke');
  var strokeArray = $('.brushStroke');
  for(i=0; i<strokeArray.length; i++){
   var theStyle = $(strokeArray[i]).attr('style')
   $(strokeArray[i]).attr("style", theStyle+"transform:scaleY(.3) rotate("+i*10+"deg);")

  }
})


