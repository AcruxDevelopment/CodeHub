<?php
// Connect to the database
$conn = new mysqli("localhost", "root", "", "codehub");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = $_POST['password']; // Hash the password

    // Check if the username already exists
    $sql_check = "SELECT * FROM user WHERE username='$username'";
    $result = $conn->query($sql_check);

    if ($result->num_rows > 0) {
        // Redirect to the sign-up page if the username already exists
        header("Location: ../pages/english/signup.html?error=username_exists");
        exit(); // Ensure no further code runs
    } else {
        // Insert new user into the database
        $sql = "INSERT INTO user (username, password) VALUES ('$username', '$password')";

        if ($conn->query($sql) === TRUE) {
            // Redirect to a success page after registration
            header("Location: ../index_en.html");
            exit();
        } else {
            // Log error and handle failure
            error_log("Error: " . $sql . " - " . $conn->error);
            header("Location: ../pages/english/signup.html?error=registration_failed");
            exit();
        }
    }
}

$conn->close();
?>
