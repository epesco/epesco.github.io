

/* Fixing margin below absolute div (banner) */
var profimgheight = $('#profileimg').height() + 5;
console.log(profimgheight)
var heightwithpx = String(profimgheight) + "px";
console.log(heightwithpx)
$('#about').css('top', heightwithpx);


var docwidth = jQuery(document).width()
var strdocwidth = String(docwidth) + "px";
console.log(strdocwidth)
$('#containerbanner').css('width', strdocwidth);
