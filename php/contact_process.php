<?php
// Get the form input values
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Store the message in a database (replace with your own database code)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO messages (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    $response = "Message stored in the database successfully.";
} else {
    $response = "Error storing message in the database: " . $conn->error;
}

$conn->close();


header("Location: home.php");
exit();

?>
