<?php
include("BBDD.php");
class Crear{
    protected $bbdd;
    public function __construct(){
        $this->bbdd = new BBDD();
    }

    function InsertarHamburguesa($nombreAmborgesa, $pan, $carne, $lechuga, $tomate, $salsa, $bacon, $cebolla, $pepinillos, $guacamole, $queso, $huevo,$user) {
        if(hash_equals($nombreAmborgesa,"")){
            return false;
        }else{
            $this->bbdd->InsertarHamburguesa($nombreAmborgesa, $pan, $carne, $lechuga, $tomate, $salsa, $bacon, $cebolla, $pepinillos, $guacamole, $queso, $huevo,$user);
            return true;
        }
    }
}
$asd=new Crear();
if($asd->InsertarHamburguesa($_POST["nombreAmborgesa"],$_POST["pan"],$_POST["carne"],$_POST["lechuga"], $_POST["tomate"],$_POST["salsa"],$_POST["bacon"],$_POST["cebolla"],$_POST["pepinillos"],$_POST["guacamole"],$_POST["queso"],$_POST["huevo"],$_POST["user"])){
    echo "bien";
}else{
    echo "mal";
}

?>
