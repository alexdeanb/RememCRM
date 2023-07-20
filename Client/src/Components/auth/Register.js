import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../modules/authManager";
import { Button, Label, TextInput } from "flowbite-react";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const userProfile = { name, email };
      register(userProfile, password).then(() => navigate("/"));
    }
  };

  return (
    <form onSubmit={registerClick}>
      <fieldset>
        <div>
          <Label htmlFor="name">Name</Label>
          <TextInput
            id="name"
            type="text"
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label for="email">Email</Label>
          <TextInput
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label for="password">Password</Label>
          <TextInput
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Label for="confirmPassword">Confirm Password</Label>
          <TextInput
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <Button>Register</Button>
        </div>
      </fieldset>
    </form>
  );
}
