const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

// Secret key for JWT (keep it safe)
const JWT_SECRET = "vishal_babar_secret_key";
const users = [];

// Signup route
app.post("/signin", (req, res) => {
  const { userName, password } = req.body;

  users.push({ userName, password });

  res.json({ message: "You are signed up" });
});

// Login route with JWT
app.post("/login", (req, res) => {
  const { userName, password } = req.body;

  const foundUser = users.find(
    (u) => u.userName === userName && u.password === password
  );

  if (foundUser) {
    // Generate JWT token
    const token = jwt.sign({ userName }, JWT_SECRET, { expiresIn: "1h" });

    return res.json({
      message: "You are logged in",
      token: token,
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

// Protected route (example)
app.get("/profile", (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(403).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ message: "Welcome to your profile", user: decoded });
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
