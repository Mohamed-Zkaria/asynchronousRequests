var form = document.getElementById('submitform');
var button = document.getElementById('submitButton');
var inputName = document.getElementById('name');
var inputAge = document.getElementById('age');
var tbody = document.getElementById('resultretrieveall');

(function retrieveAll(){	
	if( window.XMLHttpRequest ){
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	setTimeout( function(){
		xmlhttp.open("GET", "retriveall.php?retrieve=" + Math.random() , true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function() {
			if( xmlhttp.readyState == 4 && xmlhttp.status == 200 ){
				tbody.innerHTML = "";
				var text = "";
				var tropen = "<tr>",
							trclose = "</tr>"
							tdopen = "<td>"
							tdclose = "</td>";	// I defiend those variables because there was an error saying unexpected string, and by defining them like this the error didn't show up.		
				var result = JSON.parse( xmlhttp.responseText );
				for( row in result ){
					text += tropen + tdopen + result[row].name + tdclose + tdopen + result[row].age + tdclose + trclose;
				}
				tbody.innerHTML = text;
				retrieveAll();
			}
		}
	}, 5000 );
})();
	
form.onsubmit = function( e ){	
		if( window.XMLHttpRequest ){
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	e.preventDefault();
	xmlhttp.open("POST", "Insert.php?Insert=", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("name=" + inputName.value + "&age=" + inputAge.value);
	
	xmlhttp.onreadystatechange = function() {
		if( xmlhttp.readyState == 4 && xmlhttp.status == 200 ){
			document.getElementById('resultonsubmit').innerHTML = xmlhttp.responseText;	
			form.reset();
		}
	}
}