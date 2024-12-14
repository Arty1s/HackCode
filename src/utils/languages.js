import React from "react";
import { Link } from "gatsby";

// Define a list of programming languages with descriptions and icons
const programmingLanguages = [
  { name: "JavaScript", description: "Web Development", icon: "🟨", slug: "javascript" },
  { name: "Python", description: "AI & Data Science", icon: "🐍", slug: "python" },
  { name: "Java", description: "Enterprise Applications", icon: "☕", slug: "java" },
  { name: "C#", description: "Game Development", icon: "🎮", slug: "csharp" },
  { name: "Ruby", description: "Web Applications", icon: "💎", slug: "ruby" },
  { name: "PHP", description: "Web Backend", icon: "🐘", slug: "php" },
  { name: "Swift", description: "iOS Development", icon: "🍎", slug: "swift" },
  { name: "C++", description: "High-Performance Apps", icon: "🔧", slug: "cpp" },
  { name: "Rust", description: "Systems Programming", icon: "🦀", slug: "rust" },
];

const Languages = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 items per row
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {programmingLanguages.map((language) => (
        <Link
          to={`/languages/${language.slug}`} // Dynamic link to language page
          key={language.slug}
          style={{
            textDecoration: "none", // Remove underline
            color: "inherit", // Inherit text color
            display: "block", // Ensure block-level for the link
          }}
        >
          <div
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>{language.icon}</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>{language.name}</div>
            <div style={{ fontSize: "14px", color: "#555" }}>{language.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Languages;
