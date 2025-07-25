import React, { useState } from 'react';

function Signup() {
const [formData, setFormData] = useState({
 //current state and A function that updates the state
  firstname: '',
  email: '',
  password: ''
});


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};


  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("Server Response:", data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };


  return (
    <div>
      <h1>Signup</h1>
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Signup;

