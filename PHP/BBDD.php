<?php
class BBDD{
    protected $servername;
    protected $username;
    protected $password;
    protected $database;
    protected $usuarios;
    protected $amborgesas;

    public function __construct(){
        $this->servername = "localhost";
        $this->username = "DBUSER2018";
        $this->password = "DBPSWD2018";
        $this->database = "amborgeseria";
        $this->usuarios = "usuarios";
        $this->amborgesas = "amborgesas";
        $this->CrearBBDD();
    }

    function CrearBBDD() {
        $db = new mysqli($this->servername,$this->username,$this->password);
        if($db->connect_error) {
            print "Error conexion";
            exit();
        }
        $crearbase = "CREATE DATABASE IF NOT EXISTS " . $this->database . " COLLATE utf8_spanish_ci";
        if($db->query($crearbase) === FALSE){
            print "Error BBDD";
            exit();
        }
        $db->select_db($this->database);
        $crearTabla = "CREATE TABLE IF NOT EXISTS " . $this->usuarios . " (id_u VARCHAR(255) NOT NULL, 
                        dni VARCHAR(9) NOT NULL,
                        nombre VARCHAR(255) NOT NULL, 
                        apellidos VARCHAR(255) NOT NULL,
                        contrasena VARCHAR(255) NOT NULL,
                        PRIMARY KEY (id_u))";
        if($db->query($crearTabla) === FALSE){
            print "Error tabla";
            exit();
        }
        $crearTabla2 = "CREATE TABLE IF NOT EXISTS " . $this->amborgesas . " (
                        nombre VARCHAR(255) NOT NULL, 
                        pan VARCHAR(255) NOT NULL,
                        tipocarne VARCHAR(255) NOT NULL,
                        lechuga VARCHAR(2) NOT NULL,
                        tomate VARCHAR(2) NOT NULL,
                        salsa VARCHAR(255) NOT NULL,
                        bacon VARCHAR(2) NOT NULL,
                        cebolla VARCHAR(255) NOT NULL,
                        pepinillos VARCHAR(2) NOT NULL,
                        guacamole VARCHAR(2) NOT NULL,
                        queso VARCHAR(255) NOT NULL,
                        huevo VARCHAR(2) NOT NULL,
                        precio INT NOT NULL,
                        id_u VARCHAR(255) NOT NULL,
                        PRIMARY KEY (nombre),
                        FOREIGN KEY(id_u) REFERENCES usuarios(id_u))";
        if($db->query($crearTabla2) === FALSE){
            print "Error tabla";
            exit();
        }
        $db->close();
    }

    function InsertarHamburguesa($nombreAmborgesa, $pan, $carne, $lechuga, $tomate, $salsa, $bacon, $cebolla, $pepinillos, $guacamole, $queso, $huevo,$user){
        $db = new mysqli($this->servername,$this->username,$this->password,$this->database);
        $consultaPre = $db->prepare("INSERT INTO amborgesas (nombre,pan,tipocarne,lechuga,tomate,salsa,bacon,cebolla,pepinillos,guacamole,queso,huevo,precio,id_u) values(?,?,?,?,?,?,?,?,?,?,?,?,17,?)");
        $consultaPre->bind_param('sssssssssssss',$nombreAmborgesa, $pan, $carne, $lechuga, $tomate, $salsa, $bacon, $cebolla, $pepinillos, $guacamole, $queso, $huevo,$user);
        $consultaPre->execute();
        $consultaPre->close();
        $db->close();
    }

    function ObtenerNombres(){
        $db = new mysqli($this->servername,$this->username,$this->password,$this->database);
        $consultaPre = $db->prepare("SELECT * FROM amborgesas");
        $consultaPre->execute();
        $resultado = $consultaPre->get_result();
        $consultaPre->close();
        $db->close();
        return $resultado;
    }

    function InicioSesion($user, $pass){
        $db = new mysqli($this->servername,$this->username,$this->password,$this->database);
        $consultaPre = $db->prepare("SELECT * FROM usuarios WHERE id_u = ? and contrasena = ?");
        $consultaPre->bind_param('ss', $user,$pass);
        $consultaPre->execute();
        $resultado = $consultaPre->get_result();
        $consultaPre->close();
        $db->close();
        return $resultado;
    }
    function Registro($nombre, $apellidos, $usuario, $dni , $pass){
        if($this->ComprobarUsuario($usuario)){
            $db = new mysqli($this->servername,$this->username,$this->password,$this->database);
            $consultaPre = $db->prepare("INSERT INTO usuarios (id_u, dni, nombre, apellidos, contrasena) VALUES (?,?,?,?,?)");
            $consultaPre->bind_param('sssss', $usuario,$dni,$nombre,$apellidos, $pass);
            $consultaPre->execute();
            return true;
        }else{
            return false;
        }
    }

    function ComprobarUsuario($usuario){
        $db = new mysqli($this->servername,$this->username,$this->password,$this->database);
        $consultaPre = $db->prepare("SELECT * FROM usuarios WHERE id_u = ?");
        $consultaPre->bind_param('s', $usuario);
        $consultaPre->execute();
        $resultado = $consultaPre->get_result();
        if($resultado){
            return true;
        }
        return true;

    }
}
?>
