<?php
include("BBDD.php");
class Crear{
    protected $bbdd;
    public function __construct(){
        $this->bbdd = new BBDD();
    }

    function InsertarHamburguesa($nombreAmborgesa, $pan, $carne, $lechuga, $tomate, $salsa, $bacon, $cebolla, $pepinillos, $guacamole, $queso, $huevo,$user) {
        $this->bbdd->InsertarHamburguesa($nombreAmborgesa, $pan, $carne, $lechuga, $tomate, $salsa, $bacon, $cebolla, $pepinillos, $guacamole, $queso, $huevo,$user);
    }
}
$asd=new Crear();
$asd->InsertarHamburguesa($_POST["nombreAmborgesa"],$_POST["pan"],$_POST["carne"],$_POST["lechuga"], $_POST["tomate"],$_POST["salsa"],$_POST["bacon"],$_POST["cebolla"],$_POST["pepinillos"],$_POST["guacamole"],$_POST["queso"],$_POST["huevo"],$_POST["user"]);
?>
