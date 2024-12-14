import React from "react";
import Header from "../components/header"; // Sidebar menu is part of Header
import Languages from "../utils/languages"; // Language grid component

const IndexPage = () => (
  <div style={{ display: "flex", height: "100vh" }}>
    {/* Sidebar */}
    <Header siteTitle="HackCode" />
    {/* Main Content */}
    <main
      style={{
        flex: 1,
        padding: "20px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          Hey coders!
        </h1>
        <p style={{ fontSize: "16px", color: "#666" }}>
          Explore the languages and gain the highest level!
        </p>
      </div>
      {/* Language Grid */}
      <Languages />
    </main>
  </div>
);

export default IndexPage;
