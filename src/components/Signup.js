import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Signup = () => {
  const [user, setUser] = useState({});
  const { signup } = useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password, user.username);
      alert("Account created successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container">
      <h1 className="heading">Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button className="submit-btn">Sign Up</button>
      </form>
      <p className="account">
        Already have an account! <Link to="/login">Log in</Link>.
      </p>
    </div>
  );
};

export default Signup;
