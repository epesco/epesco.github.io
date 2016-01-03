

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


$("#showcs").click(function(){
    $("#cscourses").toggle();
});
