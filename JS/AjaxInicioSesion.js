"use strict";
class AjaxInicioSesion{
    objetoAjax(){
		var xmlhttp = false;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {

			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false; }
		}

		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		  xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	}
    enviarDatos(){
        //Recogemos los valores introducimos en los campos de texto
        var user = document.formularioSesion.prueba1.value;
        var pass = document.formularioSesion.prueba2.value;
        var resultado2 = document.getElementById('div1');
		//instanciamos el objetoAjax
        var ajax = this.objetoAjax();
		//Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
		ajax.open("POST", "PHP/InicioSesion.php", true);
		//cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
		ajax.onreadystatechange = function() {
             //Cuando se completa la petición, mostrará los resultados
			if (ajax.readyState == 4){
                if(ajax.responseText === "Datos incorrectos." ){
                    alert(ajax.responseText);
                }else if(ajax.responseText == "Rellene los campos correctamente."){
                    alert(ajax.responseText);
                }else{
					$("#div1").show();
					$("#aux").hide();
					$("#navbar").show();
					document.getElementById('user').innerHTML = ajax.responseText;
					$("#user").hide();
                }
			}
		}
		//Llamamos al método setRequestHeader indicando que los datos a enviarse están codificados como un formulario.
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("&prueba1="+ user + "&prueba2=" + pass);
    }
}
var inicioajax = new AjaxInicioSesion();