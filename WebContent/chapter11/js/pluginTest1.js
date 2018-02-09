/**
 * 
 */
$.fn.greenfy = function(){
	//this: jquery 객체
	this.css("background-color","green");
}

$.fn.setBgColor = function(color){
	this.css("background-color",color);
}

$.fn.setBgColor2 = function(option){
	this.css("background-color", option.color);
}



//$는 jquery의 별칭이므로 다른 라이브러리에서 $를 사용하더라도 
//이 영역안에서는 $를 jquery로 인식할 수 있게 처리함
(function($){
	var settings = {
			"bgColor" : "red",
			"color":"white",
			
	}

	$.fn.setBgColor3 = function(option){
		settings = $.extend(settings, option); //extend: 합친다
		console.log(settings);
		this.css("background-color",settings.bgColor)
			.css("color",settings.color)
			.css("border",settings.border);
		return this;
	}
}(jQuery))