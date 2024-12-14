import React from "react";
import Header from "../components/header"; // Import Header component

// Sample data for the leaderboard
const players = [
  { name: "Michael K.", score: 132, rank: 1, avatar: "👔", medal: "🥇" },
  { name: "$c0re_k1ller", score: 132, rank: 2, avatar: "😺", medal: "🥈" },
  { name: "Grandmaster 999", score: 128, rank: 3, avatar: "🦒", medal: "🥉" },
  { name: "Player #4142", score: 127, rank: 4, avatar: "👩", medal: "" },
  { name: "just_user", score: 119, rank: 5, avatar: "🧑‍💻", medal: "" },
  { name: "Nikolay Volkov", score: 115, rank: 6, avatar: "👨", medal: "" },
];

const Leaderboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "row" }}>
      {/* Sidebar menu */}
      <Header siteTitle="Leaderboard" />

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "600px", // Increased width
            width: "100%",
            padding: "30px", // Increased padding
            borderRadius: "15px", // Larger corner radius
            backgroundColor: "#fff",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Larger shadow
            fontFamily: "'Arial', sans-serif",
          }}
        >
          <h1
            style={{
              margin: "0 0 30px",
              fontSize: "28px", // Larger font size for the title
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
            }}
          >
            Best Coders
          </h1>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {players.map((player) => (
              <li
                key={player.rank}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px 20px", // Increased padding
                  borderBottom: "1px solid #ddd",
                  fontSize: "18px", // Larger font size for content
                }}
              >
                {/* Player info */}
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <span style={{ fontSize: "30px" }}>{player.avatar}</span>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "18px",
                        fontWeight: player.rank <= 3 ? "bold" : "normal",
                      }}
                    >
                      {player.name}
                    </p>
                    <p style={{ margin: 0, fontSize: "16px", color: "#666" }}>
                      Score: {player.score}
                    </p>
                  </div>
                </div>
                {/* Rank and medal */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {player.medal && (
                    <span style={{ fontSize: "28px" }}>{player.medal}</span> // Increased medal size
                  )}
                  <span
                    style={{
                      fontSize: "16px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: player.rank <= 3 ? "#ff9900" : "#333",
                    }}
                  >
                    {player.rank}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
