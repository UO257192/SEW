<?php
include("BBDD.php");
class Registro{
    protected $bbdd;

    public function __construct(){
        $this->bbdd = new BBDD();
    }

    function registro($nombre, $apellidos, $usuario, $dni , $pass1,$pass2) {
        $stringDatos = " ";
        if(empty($nombre)|| empty($apellidos)|| empty($usuario)|| empty($dni)|| empty($pass1)|| empty($pass2)){
            $stringDatos = "Rellene los campos correctamente.";
        }else if($pass1 != $pass2){
            $stringDatos = "Las contraseñas no coinciden.";
        }else{
            $result = $this->bbdd->registro($nombre, $apellidos, $usuario, $dni , $pass1);
            if($result){
                $stringDatos .= "<div id='usuario'>";
                $stringDatos .= "<p id='nUsuario'>". $usuario."</p>";
                $stringDatos .= "<p>DNI: ". $dni."</p>"; 
                $stringDatos .= "<p>Nombre: ". $nombre."</p>"; 
                $stringDatos .= "<p>Apellidos: ". $apellidos."</p>";
                $stringDatos .= "</div>";
            }else{
                $stringDatos .= "El nombre de usuario ya existe.";
            }
        }
        return $stringDatos;
    }
}
$res = new Registro();
echo $res->registro($_POST["name"], $_POST["apellidos"],$_POST["usuario"], $_POST["dni"] , $_POST["pass1"],$_POST["pass2"]);
?>
