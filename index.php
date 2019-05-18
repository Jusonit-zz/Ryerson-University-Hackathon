<?php

include "db.php";

# Retrieve raw HTTP request data
$decoded_data = get_http_request();

if (is_null($decoded_data)){
    echo "Data is Null";
	//if data is null, manually select a request_id
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
        //Arguments: Username and password
        //Return: 0/1/2
        case "LOGIN":
            include "db.php";
			function verify_credentials($user, $pass)
			{
				$db = new DB();
				$conn = $db->get_connection();
				$result = $conn->query("SELECT * FROM profiles WHERE username = '$user' AND password = '$pass'");
				$role = $result->num_rows > 0 ? 1 : 0;
				$conn->close();
				return $role;
			}
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
?>

