<?php

class Conectar{
    protected $db;
    protected function Conexion(){
        try {
            $conectar=$this->db=new PDO("mysql: local=localhost;dbname=alquilartemis", "campus","campus2023");

            return $conectar;

        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function set_name(){
        return $this->query("SELECT NAMES 'utf8'");
    }
}

?>