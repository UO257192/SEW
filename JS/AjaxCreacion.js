"use strict";
class AjaxCreacion{
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
        var nombreAmborgesa = document.formulario.nombreAmborgesa.value;
        var pan = document.formulario.pan.value;
        var carne= document.formulario.carne.value;
        var lechuga= document.formulario.lechuga.value;
        var tomate= document.formulario.tomate.value;
        var salsa= document.formulario.salsa.value;
        var bacon= document.formulario.bacon.value;
        var cebolla= document.formulario.cebolla.value;
        var pepinillos= document.formulario.pepinillos.value;
        var guacamole= document.formulario.guacamole.value;
        var queso= document.formulario.queso.value;
        var huevo= document.formulario.huevo.value;
        var user= $("#nUsuario").text();
        var nombre = user +" - " + nombreAmborgesa;
        if(nombreAmborgesa==""){
            alert("La Amborgesa deberia tener un nombre");
        }else{
            //instanciamos el objetoAjax
            var ajax = this.objetoAjax();
            //Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
            ajax.open("POST", "PHP/Crear.php", true);
            //cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
            ajax.onreadystatechange = function() {
                //Cuando se completa la petición, mostrará los resultados
                if (ajax.readyState == 4){
                    alert("Se ha guardado correctamente");
                }
            }
            //Llamamos al método setRequestHeader indicando que los datos a enviarse están codificados como un formulario.
            ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            ajax.send("&nombreAmborgesa="+ nombre + 
            "&pan=" + pan +
            "&carne=" + carne + 
            "&lechuga=" + lechuga +
            "&tomate=" + tomate +  
            "&salsa=" + salsa + 
            "&bacon=" +bacon +
            "&cebolla=" + cebolla+
            "&pepinillos=" +pepinillos+
            "&guacamole=" +guacamole+
            "&queso=" +queso+
            "&huevo=" +huevo+"&user=" +user);
        } 
    }
}
var creacion = new AjaxCreacion();