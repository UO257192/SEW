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
                    document.getElementById('aux').innerHTML = "<div class='signform'><h2>Datos incorrectos</h2><h3>Iniciar sesión</h3><div class='form'><form name='formularioSesion' onsubmit='inicioajax.enviarDatos(); return false' class='login-form' ><input type='text' name='prueba1' placeholder='Nombre de usuario'/><input type='password' name='prueba2' placeholder='Contraseña'/><input class='subbt' type='submit' value='Iniciar sesión'></input></form><button id='registro' onclick='nav.registro()'>¿No tienes cuenta? Registrate aqui.</button></div></div>";
                }else if(ajax.responseText == "Rellene los campos correctamente."){
                    document.getElementById('aux').innerHTML = "<div class='signform'><h2>Rellene los campos correctamente</h2><h3>Iniciar sesión</h3><div class='form'><form name='formularioSesion' onsubmit='inicioajax.enviarDatos(); return false' class='login-form' ><input type='text' name='prueba1' placeholder='Nombre de usuario'/><input type='password' name='prueba2' placeholder='Contraseña'/><input class='subbt' type='submit' value='Iniciar sesión'></input></form><button id='registro' onclick='nav.registro()'>¿No tienes cuenta? Registrate aqui.</button></div></div>";
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