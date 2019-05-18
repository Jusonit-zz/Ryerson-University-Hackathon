<?php
    $hostname = '35.196.158.3';
    $username = 'fthott';
    //$password = 'zy0sqcm7'; //NJIT given password
    $database = 'test1';

    //$conn = mysqli_connect($hostname, $username, $password, $database);
    $conn = mysqli_connect($hostname, $username, $database);

    if(!$conn) {
    	echo "Connection failed: " . mysqli_connect_error();
    } else {
        echo "good!";
    }

?>
