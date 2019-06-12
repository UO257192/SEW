"use strict";
class Carrito{
    constructor(){
        this.listaNombres = [];
        this.listaPrecio = [];
        this.precio = 0.0;
        this.pelicula = "";
    }
    add(nombre, precio){
        this.listaNombres.push(nombre+"");
        this.listaPrecio.push(precio);
        this.precio += parseFloat(precio);
        alert("La hamburguesa " + nombre + " se ha añadido al carrito");
    }
    mostrar(){
        $("#navbar").show();
        if(this.precio === 0.0){
            alert("No hay articulos en el carrito");
        }else{
            var i=0;
            var stringDatos =  "<h2>Carrito</h2><div id='carr'>";
            for (i = 0; i < this.listaNombres.length; i++) {
                stringDatos +="<div class='hambcarr'>";
                stringDatos += "<img class ='imagen' src='./IMG/fotohamburguesa.png' alt='foto'>";
                stringDatos += "<p class='segundo'>" + this.listaNombres[i] +" </p>";
                stringDatos += "<p class='tercero'>" + this.listaPrecio[i] +"€</p>";
                stringDatos += "<button class='cuarto' onclick='carrito.remove(&#34;"+i+"&#34; )'>Eliminar</button></div>";
            }
            if(i != 0){
                
                stringDatos += "<p id='preciototal'>Precio: "+this.precio+"€</p>";
                stringDatos += "<button onclick='pelis.cargarDatos()'>Realizar pedido</button>";
            }
            stringDatos+="</div>";
            document.getElementById("div1").innerHTML = stringDatos;
            document.getElementById("aux").innerHTML = "";
            $("#div1").show();
            $("#user").hide();
        }  
    }
    remove(index){
        var r = confirm("¿Estás seguro de que quieres borrar esta hamburguesa?");
        if (r == true) {
            this.listaNombres.splice(index,1);
            this.precio -= parseFloat(this.listaPrecio[index]);
            this.listaPrecio.splice(index,1);
            this.mostrar();
            document.getElementById("preciototal").innerHTML = "Precio: "+this.precio + "€";
        } 
    }
    addPelicula(titulo){
        this.pelicula = titulo;
    }

    mostrarFactura(direccion){
        var factura ="<div class='factu'><h2>Factura</h2><h3>Amborgesas:</h3>";
        for (let index = 0; index < this.listaNombres.length; index++) {
            factura += "<p>"+ this.listaNombres[index] +" ------------ "+ this.listaPrecio[index]+"€</p>";
        }
        factura += "<h3>Pelicula:</h3><p>"+this.pelicula+"</p>";
        factura += "<h3>Direccion:</h3><p>"+direccion+"</p>";
        factura += "<h3>Precio:</h3><p>Total ------------ "+ this.precio+"€</p>";
        factura += "<button onclick='carta.cargarCarta();nav.carta()'>Finalizar</button";
        factura += "</div>";
        document.getElementById("div1").innerHTML = factura;
        $("#map").hide();
        $("#aux").hide();
        this.listaNombres = [];
        this.listaPrecio = [];
        this.precio = 0.0;
        this.pelicula = "";
        
    }
}
var carrito = new Carrito();