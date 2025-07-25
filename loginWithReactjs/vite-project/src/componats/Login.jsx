import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"  // ✅ Correct MIME type
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("You are logged in", data);

    } catch (error) {
      console.log('Login failed:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstname}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default Login;

