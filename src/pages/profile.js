import React from "react";
import ProfileCard from "../components/ProfileCard"; // Import the ProfileCard component

const ProfilePage = () => {
  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <ProfileCard />
    </main>
  );
};

export default ProfilePage;
