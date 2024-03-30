import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateData } from "../features/userSlice";

const ProfileDetails = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleUpdate = () => {
    dispatch(updateData(userData));
    // Update user details in local storage
    localStorage.setItem("userData", JSON.stringify(userData));
    // Exit edit mode
    setIsEditing(false);
  };
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      // Retrieve user data from local storage
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (storedUserData) {
        setUserData(storedUserData);
      }
    }
  }, [navigate]);
  return (
    <div className="page_details">
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>phone: {userData.mobile}</p>
          {/* <p>Password: {userData.password}</p> */}
        </div>
      ) : (
        <p>User data not found</p>
      )}
      <div className="update_data">
        {isEditing ? (
          <div className="login_form">
            <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
            <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
            <input type="text" name="email" value={userData.mobile} onChange={handleInputChange} />
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            <button className= "button"onClick={handleUpdate}>Save</button>
          </div>
        ) : (
            <div className="button">
 <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
         
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
