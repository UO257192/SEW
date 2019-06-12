"use strict";
class Mapa{
    constructor(){
        this.direccion = "";
    }
    initMap(){
      
    }
    cargarMapa() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:43.361885, lng: -5.847134},
          zoom: 11
        });
        var markers = [{lat: 43.361885,lng: -5.847134},{lat: 43.363562,lng: -5.850427},{lat:43.358472 ,lng: -5.860688},{lat:43.539984 ,lng:-5.646376 },{lat: 43.543455,lng:-5.664352 }];
        for (let index = 0; index < markers.length; index++) {
          let marker2 = new google.maps.Marker;
          var infoWindow = new google.maps.InfoWindow;
          marker2.setPosition(markers[index]);
          marker2.setMap(map);
          marker2.addListener('click', function() {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({'location': markers[index]}, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    this.direccion = results[0].formatted_address;
                    infoWindow.setContent(results[0].formatted_address);
                    infoWindow.open(map, marker2);
                    document.getElementById("aux").innerHTML = "<p>Direccion seleccionada: " + this.direccion+"<div id='aux2'></p><button class='atras' onclick='pelis.cargarDatos()'>Atrás</button><button onclick='carrito.mostrarFactura(&#34;"+this.direccion+"&#34; )'>Finalizar Pedido</button></div>";
                    $("#aux").show();
                } else {
                window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
            });
            });
        }
        var marker = new google.maps.Marker;
        var infoWindow = new google.maps.InfoWindow;
        var marker = new google.maps.Marker;
        var icon =  "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({'location': pos}, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                map.setZoom(11);
                marker.setPosition(pos);
                marker.setMap(map);
                marker.setIcon(icon);
                marker.addListener('click', function() {
                    this.direccion = results[0].formatted_address;
                    infoWindow.setContent(results[0].formatted_address);
                    infoWindow.open(map, marker);
                    document.getElementById("aux").innerHTML = "<p>Direccion seleccionada: " + this.direccion+"<div id='aux2'></p><button class='atras' onclick='pelis.cargarDatos()'>Atrás</button><button onclick='carrito.mostrarFactura(&#34;"+this.direccion+"&#34; )'>Finalizar Pedido</button></div>";
                    $("#aux").show();
                  });
                } else {
                window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
            });
              map.setCenter(pos);
            }, function() {});
          }
          //$("#map").hide();
    }
}
var mapa = new Mapa();
