"use strict";
class AjaxRegistro{
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
        var nombre = document.formularioRegistro.nombre.value;
        var apellidos = document.formularioRegistro.apellidos.value;
        var usuario = document.formularioRegistro.usuario.value;
        var dni = document.formularioRegistro.dni.value;
        var pass1 = document.formularioRegistro.pass1.value;
        var pass2 = document.formularioRegistro.pass2.value;
		//instanciamos el objetoAjax
        var ajax = this.objetoAjax();
		//Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
		ajax.open("POST", "PHP/Registro.php", true);
		//cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
		ajax.onreadystatechange = function() {
             //Cuando se completa la petición, mostrará los resultados
			if (ajax.readyState == 4){

                if(ajax.responseText === "Rellene los campos correctamente." ){
                    alert(ajax.responseText);
                }else if(ajax.responseText === "Las contraseñas no coinciden."){
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
		 ajax.send("&name="+ nombre + "&apellidos="+ apellidos+ "&usuario="+ usuario+ "&dni="+ dni+ "&pass1="+ pass1+ "&pass2="+ pass2); 
    }
}
var registroajax = new AjaxRegistro();