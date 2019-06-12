"use strict";
class Navigator{
    login(){
        $("#navbar").hide();
        $("#aux").load("TEXT/sesion.txt");
        $("#map").hide();
        $("#user").hide();
    }
    mostrarDatosUser(){
        $("#div1").hide();
        $("#user").show();
        $("#map").hide();
        document.getElementById('aux').innerHTML = "<button class='atras' onclick='nav.login();carta.cargarCarta();carrito.resetearCarrito()'>Cerrar Sesion</button>";
		$("#aux").show();
    }
    carta(){
        $("#navbar").show();
        $("#div1").show();
        $("#user").hide();
        $("#map").hide();
        $("#aux").hide();
    }
    registro(){
        $("#aux").load("TEXT/registro.txt");
        $("#map").hide();
    }
    creaciones(){
        $("#user").hide();
        $("#div1").load("PHP/FromCreacion.php");
        $("#div1").show();
        $("#map").hide();
        $("#aux").hide();
    }
    crear(){
        $("#user").hide();
        $("#div1").load("PHP/Creaciones.php");
        $("#div1").show();
        $("#map").hide();
        $("#aux").hide();
    }
    mostrarMapa(){
        $("#map").show();
        $("#user").hide();
        $("#div1").load("TEXT/mapa.txt");
        document.getElementById("aux").innerHTML="<button class='atras' onclick='pelis.cargarDatos()'>Atrás</button>";
        $("#aux").show();
    }
}

var nav = new Navigator();