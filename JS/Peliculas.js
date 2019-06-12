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
                            var titulo = datos.Title;
                            titulo.split(" ");
                            var tituloFinal="";
                            for (let index = 0; index < titulo.length; index++) {
                                tituloFinal += " " + titulo[index];
                            }
                            stringDatos += "<img src=" +datos.Poster+" alt=" +tituloFinal+">";
                            stringDatos += "<button onclick='carrito.addPelicula(&#34;"+titulo.toString()+"&#34;);mapa.cargarMapa();nav.mostrarMapa()'>" + titulo.toString()+" - "+ datos.imdbRating+"/10</button>";
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
