<?php
		
	require_once 'connection.php';
			
	if( isset( $_GET['Insert'] ) ){
		if( !empty( $_POST['name'] )  && !empty( $_POST['age'] ) ){
				
			$name = mysqli_real_escape_string( $con, $_POST['name'] );
			$age = mysqli_real_escape_string( $con, $_POST['age']);
			
			$query = "INSERT INTO users(`name`, `age`) values('$name', '$age')";
			
			if( ! mysqli_query( $con, $query ) ){	
				echo mysqli_error( $con );
			} else {
				echo "query has been successfully done.";
			}
		} else {
			echo "fields are empty";
		}
	}