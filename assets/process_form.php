<?php
// Assuming your PostgreSQL database connection details
$host = "localhost";
$dbname = "portfolio";
$user = "root";
$password = "";

// Connect to PostgreSQL
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

// Check connection
if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["comment"];

    // Insert data into the database
    $query = "INSERT INTO contact_form (name, email, message) VALUES ('$name', '$email', '$message')";

    $result = pg_query($conn, $query);

    if ($result) {
        echo "New record created successfully";
    } else {
        echo "Error: " . pg_last_error($conn);
    }
}

// Close the connection
pg_close($conn);
?>
