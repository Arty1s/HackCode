import React from "react";

// Sample roadmap steps
const roadmapSteps = [
  { title: "Introduction to Programming", status: "completed", icon: "📘" },
  { title: "Variables and Data Types", status: "completed", icon: "📘" },
  { title: "Functions and Loops", status: "completed", icon: "📘" },
  { title: "Object-Oriented Programming", status: "in-progress", icon: "📖" },
  { title: "Data Structures", status: "locked", icon: "🔒" },
  { title: "Algorithms", status: "locked", icon: "🔒" },
  { title: "Advanced Topics", status: "locked", icon: "🔒" },
];

const Roadmap = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f5f5f5", // Light gray background
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Learning Roadmap</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          position: "relative",
        }}
      >
        {/* Line connecting the steps */}
        <div
          style={{
            position: "absolute",
            width: "4px",
            height: "100%",
            backgroundColor: "#ccc",
            zIndex: 0,
          }}
        ></div>

        {/* Steps */}
        {roadmapSteps.map((step, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor:
                step.status === "completed"
                  ? "#d1d1d1" // Gray for completed steps
                  : step.status === "in-progress"
                  ? "#b0b0b0" // Slightly darker gray for in-progress
                  : "#e0e0e0", // Light gray for locked
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span style={{ fontSize: "28px" }}>{step.icon}</span>
            <p
              style={{
                margin: "5px 0 0",
                fontSize: "12px",
                textAlign: "center",
                color: "#555",
                fontWeight: step.status === "in-progress" ? "bold" : "normal",
              }}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
