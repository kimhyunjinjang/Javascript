/**
 * 
 */

(function($){
	$.fn.showImg=function(){
		$target = this;
		$target.find("img").click(function(){
			$(".yShowWrapper").remove();
			var path=$(this).attr("src");
			var $div = $("<div>").addClass("yShowWrapper");
			var $img = $("<img>").attr("src",path);
			
			var image = new Image();
			image.src=path;
			image.addEventListener("load", function(){
				var width = image.width;
				var height = image.height;
				$div.css("width", width).css("height", height);
				$div.append($img);
				
				$("body").append($div);
				
				$div.hide();
				$div.fadeIn(500);
			
			}, false);
		
			
			var a = $(this).attr("alt");
			var $p=$("<p id='p1'>").html(a);
			$div.append($p);
		})
	}
}(jQuery))