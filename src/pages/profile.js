import React from "react";
import ProfileCard from "../components/ProfileCard"; // Import the ProfileCard component
import Header from "../components/header"; // Sidebar menu is part of Header

const ProfilePage = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <ProfileCard />
      </main>
    </div>
  );
};

export default ProfilePage;