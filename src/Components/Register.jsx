import React from "react";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      password,
      gender,
    };

    fetch("https://red-sore-cygnet.cyclic.app/users/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>Registeration Page</div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter your Password"
      />
      <input
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        type="number"
        placeholder="Enter your Age"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Register;
