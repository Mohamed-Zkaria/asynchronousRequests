<?php

	require_once 'connection.php';
	if( isset( $_GET['retrieve'] ) ){
		
		$query = mysqli_query( $con, "SELECT * FROM users ORDER BY `id` DESC LIMIT 5" );
		
		$resultArray = array();
		
		foreach( $query as $row ){
			 $resultArray[] =$row;	
		}
		
		echo json_encode($resultArray);
	}
	
	