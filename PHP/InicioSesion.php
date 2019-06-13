<?php
include("BBDD.php");
class InicioSesion
{
    protected $bbdd;

    public function __construct(){
        $this->bbdd = new BBDD();
    }

    function IniciarSesion($user, $pass) {
        $stringDatos = " ";
        if(empty($user) || empty($pass)){
            $stringDatos = "Rellene los campos correctamente.";
        }else{
            $result = $this->bbdd->InicioSesion($user, $pass);
            if(isset($result)){
                $row = $result->fetch_assoc();
                if(isset($row)){
                    $stringDatos .= "<div id='usuario'>";
                    $stringDatos .= "<p id='nUsuario'>". $user."</p>";
                    $stringDatos .= "<p>DNI: ". $row['dni']."</p>"; 
                    $stringDatos .= "<p>Nombre: ". $row['nombre']."</p>"; 
                    $stringDatos .= "<p>Apellidos: ". $row['apellidos']."</p>";
                    $stringDatos .= "</div>";
                }else{
                    $stringDatos = "Datos incorrectos.";
                }
            }
        }
        return $stringDatos;
    }
}
$ins = new InicioSesion();
echo $ins->IniciarSesion($_POST["prueba1"],$_POST["prueba2"]);
?>