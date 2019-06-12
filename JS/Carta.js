"use strict";
class Carta{
    cargarCarta(){
        $.ajax({
            dataType: "xml",
            url: "./XML/Carta.xml",
            method: 'GET',
            success: function(datos){
                var stringDatos =  "<div id='xml'>";
                $(datos).find('hamburguesa').each(function () {
                    stringDatos+="<div class='hamb'>";
                    stringDatos += "<img class ='imagen' src='./IMG/fotohamburguesa.png' alt='foto'>";
                    stringDatos += "<div class='segundo'><p>" + $(this).find('nombre').text() +" - "+ $(this).find('precio').text()+"€ </p>";

                    var ingredientes =  "<p> Ingredientes: ";

                    ingredientes += $(this).find('pan').text() + ", ";

                    ingredientes += $(this).find('tipocarne').text() + ", ";

                    var queso = $(this).find('queso').text();
                    if(queso != "Ninguno"){
                        ingredientes += "queso " + queso + ", ";
                    }

                    var lechuga = $(this).find('lechuga').text();
                    if(lechuga === "Si"){
                        ingredientes += "lechuga, ";
                    }

                    var tomate = $(this).find('tomate').text();
                    if(tomate === "Si"){
                        ingredientes += "tomate, ";
                    }

                    var bacon = $(this).find('bacon').text();
                    if(bacon === "Si"){
                        ingredientes += "bacon, ";
                    }

                    var cebolla = $(this).find('cebolla').text();
                    if(cebolla != "No"){
                        ingredientes += "cebolla "+cebolla + ", ";
                    }

                    var pepinillos = $(this).find('pepinillos').text();
                    if(pepinillos === "Si"){
                        ingredientes += "pepinillos, ";
                    }

                    var huevo = $(this).find('huevo').text();
                    if(huevo === "Si"){
                        ingredientes += "huevo, ";
                    }

                    var guacamole = $(this).find('guacamole').text();
                    if(guacamole === "Si"){
                        ingredientes += "guacamole, ";
                    }
                    var salsa = $(this).find('salsa').text();
                    if(salsa != "Ninguna"){
                        ingredientes += salsa;
                    }
                    stringDatos += ingredientes +".</p></div><button class='tercero' onclick='carrito.add(&#34;"+$(this).find('nombre').text()+"&#34; ,&#34;"+ $(this).find('precio').text()+"&#34;)'>Comprar</button></div>";
                });
                $("#div1").html(stringDatos);
            },
            error:function(){
            }
        });
        $("#div1").hide();
        $("#map").hide();
    }
}
var carta = new Carta();