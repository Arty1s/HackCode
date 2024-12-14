import React from "react";

const LanguageRoadmap = ({ pageContext }) => {
  const { name, description, roadmap } = pageContext;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        {name} Roadmap
      </h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
        {description}
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        {roadmap.map((step, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageRoadmap;
