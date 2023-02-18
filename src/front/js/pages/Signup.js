import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  console.log(email, password);
  const createAccount = (e) => {
    e.preventDefault();
    fetch(
      "https://3001-betojr04-budgetapp-1gp5rum3qed.ws-us87.gitpod.io/api/createaccount",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((Response) => {
        return Response.json();
      })
      .then((result) => {
        if (result.includes("User already exists :(")) {
          setError("Username Taken");
        } else {
          console.log(result);
          Navigate("/Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return (
      <div>
        <form onSubmit={createAccount} className="container">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              {error}
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Signup
          </button>
          <Link to="/Login">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Link>
        </form>
      </div>
    );
  };
};

export default Signup;
