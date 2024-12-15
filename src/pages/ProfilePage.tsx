import React, { useState } from "react";
import classes from "./ProfilePage.module.css";

export const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const initials = `${profile.firstName[0] || ""}${profile.lastName[0] || ""}`;

  return (
    <div className={classes.ProfilePage}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            name="dob"
            type="date"
            value={profile.dob}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      {success && <p>Profile updated successfully!</p>}
      <div>Avatar: {initials}</div>
    </div>
  );
};
