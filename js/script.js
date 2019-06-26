
// jQuerry to hide collapsible menu on xs when onblur 
// (Boostrap construction of collapsible menu requires jQuerry)

$(function (){ //czeka na załadowanie DOM bez obrazków itd.
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth<577){
			$("#collapsibleNavbar").collapse('hide');
		}
	});
});
//*******end of jQuerry*********

// wstawiacz fragmentów do wyświetlenia na stronach html
// insertHtml(selector, [strona lub kod html])
var insertHtml = function(selector, html){
	document.querrySelector(selector).innerHTML=html;
};


//spinner - znacznik ładowania strony itp.
//wymaga ikonki, np. ze strony ajaxload.info jak poniżej
var showLoading = function (selector){
	var html = "div ..[niezaładowna rzecz]..";
	html += "<img src='images/ajax-loader.gif'></div>";
	insertHtlm(selector, html);
};
//potem oczywiście trzeba wywołać showLoading gdy potrzeba


