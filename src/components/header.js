import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <div
    style={{
      width: "200px",
      backgroundColor: "#f8f8f8",
      borderRight: "1px solid #ddd",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      height: "100vh",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h3 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>
      Menu
    </h3>
    <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
        Learn
      </Link>
      <Link to="/leaderboards" style={{ textDecoration: "none", color: "#333" }}>
        Leaderboards
      </Link>
      <Link to="/bounties" style={{ textDecoration: "none", color: "#333" }}>
        Quests
      </Link>
      <Link to="/shop" style={{ textDecoration: "none", color: "#333" }}>
        Shop
      </Link>
      <Link to="/profile" style={{ textDecoration: "none", color: "#333" }}>
        Profile
      </Link>
      <Link to="/more" style={{ textDecoration: "none", color: "#333" }}>
        More
      </Link>
    </nav>
  </div>
);

export default Header;
