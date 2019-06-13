<?php
include("BBDD.php");
class Creaciones
{
    protected $bbdd;
    function CargarCreaciones(){
        $string = "<div id='crea'>";
        $this->bbdd = new BBDD();
        $nombres = $this->bbdd->ObtenerNombres();
        while($row = $nombres->fetch_assoc()) {
            $string .= "<div class='hamb'>";
            $string .= "<img class ='imagen' src='./IMG/fotohamburguesa.png' alt='foto'>";
            $string .= "<div class='segundo'><p>" . $row['nombre'] ." - ".$row['precio']."€</p>";
            $ingredientes =  "<p> Ingredientes: ";
            $ingredientes .=  $row['pan'] . ", ";
            $ingredientes .= $row['tipocarne'];

            $queso = $row['queso'];
            if($queso != "No"){
                $ingredientes .=  ", queso ". $queso;
            }

            $lechuga = $row['lechuga'];
            if($lechuga === "Si"){
                $ingredientes .= ", lechuga";
            }

            $tomate = $row['tomate'];
            if($tomate === "Si"){
                $ingredientes .= ", tomate";
            }

            $bacon = $row['bacon'];
            if($bacon === "Si"){
                $ingredientes .= ", bacon";
            }

            $cebolla = $row['cebolla'];
            if($cebolla != "No"){
                $ingredientes .= ", cebolla ".$cebolla;
            }

            $pepinillos = $row['pepinillos'] ;
            if($pepinillos === "Si"){
                $ingredientes .= ", pepinillos";
            }

            $huevo = $row['huevo'];
            if($huevo === "Si"){
                $ingredientes .= ", huevo";
            }

            $guacamole = $row['guacamole'] ;
            if($guacamole === "Si"){
                $ingredientes .= ", guacamole";
            }
            $salsa = $row['salsa'];
            if($salsa != "Ninguna"){
                $ingredientes .= ", ". $salsa;
            }
            $string .= $ingredientes .".</p></div><button class='tercero' onclick='carrito.add(&#34;".$row['nombre']."&#34; ,&#34;". $row['precio']."&#34;)'>Comprar</button></div>";
        }
        if($string == "<div id='crea'>"){
            $string .= "<h3>Todavia no se ha creado ninguna Amborgesa</h3>"; 
        }
        return $string."</div>";
    }
}
$prueba = new Creaciones();
echo $prueba->CargarCreaciones();
?>

