$(document).ready(function(){

    var scr  = $("stories-component").first().prev().html();
    scr += '$("#sports-image").attr({"src": obj.data[0].content_image_url});'
    scr += '$("#sports-link").attr("href", obj.data[0].content_url);' 	
	scr += '$("#cap1").text(obj.data[0].content_title);'
	scr += '$("#cap2").text(obj.data[0].sport_display.toUpperCase() + "  " + obj.data[0].content_date);'
	//scr += '$("#dummy").remove();'
    $("#sports-script").text(scr);
    $("#dummy").remove();
	
});