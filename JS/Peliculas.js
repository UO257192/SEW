"use strict";
class Peliculas {
    cargarDatos(){
        $("#navbar").hide();
        $("#map").hide();
        var stringDatos = "<h2>Selecciona una pelicula</h2><div id=pelicu>";
        $.ajax({
            dataType: "xml",
            url: "./XML/PeliculasXML.xml",
            method: 'GET',
            success: function(datos){
                $(datos).find('pelicula').each(function () {
                    var URI = "http://www.omdbapi.com/?i=" +$(this).find('codigo').text() + "&apikey=d15eb8d";
                    $.ajax({
                        dataType: "json",
                        url: URI,
                        method: 'GET',
                        success: function(datos){
                            stringDatos += "<div class='peli'>";
                            stringDatos += "<img src=" +datos.Poster+" alt= " +datos.Title+"  >";
                            stringDatos += "<button onclick='carrito.addPelicula(&#34;"+datos.Title+"&#34;);mapa.cargarMapa();nav.mostrarMapa()'>" + datos.Title+" - "+ datos.imdbRating+"/10</button>";
                            stringDatos += "</div>";
                            document.getElementById("div1").innerHTML=stringDatos;
                            document.getElementById("aux").innerHTML="<button class='atras' onclick='carrito.mostrar()'>Atrás</button>";
                            $("#aux").show();
                        },
                        error:function(){
                        }
                    });
                });
            },
            error:function(){
            }
        });
    }
}
var pelis = new Peliculas();
