/**
 * 
 */

(function($){
	$.fn.addLink=function(){
		this.attr("href","http://www.naver.com")
			.attr("target","_blank")
		return this;
	}
	
	$.fn.removeLine=function(){
		this.css("text-decoration","none");
		//return this;
	}
}(jQuery))