<?php

Class DB{
    function get_connection(){
        // STEP 01: Read configuration file
        $config = json_decode(file_get_contents("config.json"), true);

        // STEP 02: Get Database Connection
        $conn = new mysqli($config["servername"], $config["username"], $config["password"], $config["database"])
            or die("<br>Could not connect to database");

        // STEP 03: Return Connection
        return $conn;
    }
}
