

/* Fixing margin below absolute div (banner)
var profimgheight = $('#profileimg').height() -25 ;
console.log(profimgheight)
var heightwithpx = String(profimgheight) + "px";
console.log(heightwithpx)
$('#about').css('top', heightwithpx);*/


var docwidth = jQuery(document).width()/2
var strdocwidth = String(docwidth) + "px";
console.log(strdocwidth)
$('#mobileprofileimg').css('width', strdocwidth);

/* TODO: Optimize by passing in class name, parsing for after "show", appending "info", toggle that attribute
function toggleView(className){
  console.log(className);
}
*/

$("#showcs").click(function(){
    $("#cscourses").toggle();
});
$("#showmath").click(function(){
    $("#mathcourses").toggle();
});
$("#showhum").click(function(){
    $("#humcourses").toggle();
});
$("#showsci").click(function(){
    $("#scicourses").toggle();
});
$("#showupe").click(function(){
    $("#upeinfo").toggle();
});
$("#showaphi").click(function(){
    $("#aphiinfo").toggle();
});

$("#showar").click(function(){
    $("#arinfo").toggle();
});

$("#showtfs").click(function(){
    $("#tfsinfo").toggle();
});
