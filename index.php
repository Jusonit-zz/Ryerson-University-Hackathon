<?php

include "login.php";

# Retrieve raw HTTP request data
$decoded_data = get_http_request();

if (is_null($decoded_data)){
    echo "Data is Null";
    $data = array(
        "request_id" => "LOGIN"
    );
    route($data);
}
else{
    route($decoded_data);
}

function route($data)
{
    switch ($data["request_id"]) {
        //Login functionality
        //Arguemnts: Username and password
        //Return: 0/1/2
        case "LOGIN":
            $response = verify_credentials($data["username"], $data["password"]);
            echo json_encode(array("role" => $response));
            break;
			
        //DEFAULT
        default:
            echo("BACKEND - Invalid request block");
    }
}

function get_http_request()
    /** Decodes HTTP request from Front-end **/
{
    $raw_data = file_get_contents("php://input");
    $decoded_json = json_decode($raw_data, true);
    return $decoded_json;
}


