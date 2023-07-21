import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../modules/authManager";
import { Button, Label, TextInput } from "flowbite-react";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => navigate("/"))
      .catch(() => alert("Login Failed"));
  };

  return (
    <div className="p-4">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <form onSubmit={loginSubmit}>
          <fieldset>
            <div>
              <Label for="email">Email</Label>
              <TextInput
                id="email"
                type="text"
                autoFocus
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
              <Button type="submit">Login</Button>
            </div>
            <em>
              Not registered? <Link to="/register">Register</Link>
            </em>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
