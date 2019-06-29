
// jQuerry to hide collapsible menu on xs when onblur 
// (Boostrap construction of collapsible menu requires jQuerry)
// nie chce działac z dropdown w navbarze i szukaniem

// $(function (){ //czeka na załadowanie DOM bez obrazków itd.
// 	$("#navbarToggle").blur(function (event) {
// 		var screenWidth = window.innerWidth;
// 		if (screenWidth<577){
// 			$("#collapsibleNavbar").collapse('hide');
// 		}
// 	});
// });
//*******end of jQuerry*********

// wstawiacz fragmentów do wyświetlenia na stronach html
// insertHtml(selector, [strona lub kod html])
var insertHtml = function(selector, html){
	document.querySelector(selector).innerHTML=html;
};


//spinner - znacznik ładowania strony itp.
//wymaga ikonki, np. ze strony ajaxload.info jak poniżej
var showLoading = function (selector){
	var html = "div ..[niezaładowna rzecz]..";
	html += "<img src='images/ajax-loader.gif'></div>";
	insertHtlm(selector, html);
};
//potem oczywiście trzeba wywołać showLoading gdy potrzeba

//to działa:
//insertHtml("#insertFooter", '<footer id="insertFooter">blablablaScript</footer>');

$ajaxUtils.sendGetRequest ("../snippets/footer.html",
			function (responseText) {
				document.querySelector("#insertFooterPage2").innerHTML = responseText;
			},
			false);

$ajaxUtils.sendGetRequest ("./snippets/footerTemp.html",
			function (responseText) {
				document.querySelector("#insertFooter").innerHTML = responseText;
			},
			false);



//jw ujęte w IIFE:
//(function (global) {
//
//	var sample = {};
//
//	sample.changeFooterPage1 = function() {
//		$ajaxUtils.sendGetRequest ("./snippets/footerTemp.html",
//			function (responseText) {
//				document.querySelector("#insertFooter").innerHTML = responseText;
//			},
//			false);
//	};
	
//	global.$sample = sample;
//})(window);









// function search() {
 
//    var word = document.getElementById("searchForm").elements["input"].value;
//    var pattern = word.toLowerCase();
//    var targetId = "";
 
//    var pArray = document.getElementsByTagName("p");
//    for (var i = 0; i < parag.length; i++) {
//       var para = pArray[i];
//       var index = para.innerText.toLowerCase().indexOf(pattern);
//       if (index != -1) {
//          targetId = pArray[i].parentNode.id;
//          document.getElementById(targetId).scrollIntoView();
//          break;
//       }
//    }  
// }


