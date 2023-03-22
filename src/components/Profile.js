import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile">
      <h1 className="name">Welcome, {user?.name}</h1>
      <h2 className="email">Email: {user?.email}</h2>
      <button className="logOut-btn" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Profile;
