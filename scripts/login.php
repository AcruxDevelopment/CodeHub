<?php
// Connect to the database
$conn = new mysqli("localhost", "root", "", "codehub");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = $_POST['password']; // Plain password from the form

    // Fetch user from the database
    $sql = "SELECT * FROM user WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verify the password with the hashed password from the database
        if ($password == $row['password']) {
            // Successful login, redirect to dashboard or home page
            header("Location: ../index_en.html");
            exit();
        } else {
            // Password verification failed, redirect to login page with error
            header("Location: ../pages/english/login.html?error=wrong_password");
            exit();
        }
    } else {
        // No user found with that username, redirect to login page with error
        header("Location: ../pages/english/login.html?error=user_not_found");
        exit();
    }
}

$conn->close();
?>
