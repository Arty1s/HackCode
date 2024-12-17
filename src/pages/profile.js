import React from "react";
import ProfileCard from "../components/ProfileCard"; // Import the ProfileCard component
import Header from "../components/header"; // Sidebar menu is part of Header

const ProfilePage = () => {
  return (
    
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <Header siteTitle="HackCode" />
      <ProfileCard />
    </main>
  );
};

export default ProfilePage;
