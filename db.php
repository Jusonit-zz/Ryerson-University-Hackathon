<?php

    echo "before class";

    Class DB{
        function get_connection(){
            // STEP 01: Read configuration file
            $config = json_decode(file_get_contents("config.json"), true);

            // STEP 02: Get Database Connection
            // $conn = new mysqli($config["servername"], $config["username"], $config["password"], $config["database"])
            //     or die("<br>Could not connect to database");
            $conn = new mysqli($config["servername"], $config["username"], $config["password"], $config["database"]);

            if ($conn) {
                $result = "success";
            } else {
                $result = "failure";
            }
            echo $result;
            // added this
            $arr = array("results" => $result);
            echo json_encode($arr);

            // STEP 03: Return Connection
            return $conn;
        }
    }

    echo "after class";

?>
