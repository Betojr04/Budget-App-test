import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <ul className="nav justify-content-between">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <a className="nav-link " href="#">
              Budget App
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link">Take Control of your Finances</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ml-auto" aria-current="page" href="#">
            <Link to="/Signup">
              <button class="btn btn-outline-success" type="submit">
                Sign Up
              </button>
            </Link>
            <Link to="/Login">
              <button class="btn btn-outline-success" type="submit">
                Login
              </button>
            </Link>
          </a>
        </li>
      </ul>
    </div>
    // <nav className="navbar navbar-light bg-light">
    // 	<div className="container">
    // 		<Link to="/">
    // 			<span className="navbar-brand mb-0 h1">React Boilerplate</span>
    // 		</Link>
    // 		<div className="ml-auto">
    // 			<Link to="/demo">
    // 				<button className="btn btn-primary">Check the Context in action</button>
    // 			</Link>
    // 		</div>
    // 	</div>
    // </nav>
  );
};
