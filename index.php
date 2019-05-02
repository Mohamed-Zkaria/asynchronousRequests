<!DOCTYPE html>
<html>
<head>
<title>ABM</title>

<link rel="stylesheet" href="style.css">
</head>
<body>
<?php
	echo "<table>
					<thead>
						<tr><td>name</td><td>age</td></tr>
					</thead>";
					echo "<tbody id='resultretrieveall'>";
					echo"</tbody>";
	echo "</table>";
?>
<hr>
<form method="POST" id="submitform">
	<input type="text" name="name" id='name' placeholder="Enter your name" required>
	<input type="number" name="age" id='age' placeholder="Enter your age" required>
	<button id="submitButton">Submit</button>
</form>

<div id="resultonsubmit"></div>

</body>
<script src="script.js"></script>
</body>
</html>