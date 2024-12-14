import React, { useState } from "react";

// Define the Language type for better TypeScript support
type Language = {
  name: string;
  description: string;
  icon: string;
  slug: string;
  roadmap: string[]; // Roadmap steps for the language
};

// Create a list of programming languages with descriptions, icons, and roadmaps
const programmingLanguages: Language[] = [
  {
    name: "JavaScript",
    description: "Web Development",
    icon: "🟨",
    slug: "javascript",
    roadmap: [
      "Learn JavaScript Basics (variables, loops, functions)",
      "Understand DOM Manipulation",
      "Master ES6+ Features",
      "Learn Asynchronous JavaScript (Promises, Async/Await)",
      "Work with APIs and Fetch",
      "Explore JavaScript Frameworks (React, Vue, Angular)",
    ],
  },
  {
    name: "Python",
    description: "AI & Data Science",
    icon: "🐍",
    slug: "python",
    roadmap: [
      "Learn Python Basics (syntax, variables, loops)",
      "Understand Python Libraries (NumPy, pandas)",
      "Learn Data Visualization (Matplotlib, Seaborn)",
      "Explore Machine Learning (Scikit-learn, TensorFlow)",
      "Work with APIs and Web Scraping",
    ],
  },
  {
    name: "Java",
    description: "Enterprise Applications",
    icon: "☕",
    slug: "java",
    roadmap: [
      "Learn Java Basics (syntax, classes, objects)",
      "Understand OOP Concepts",
      "Work with Java Collections Framework",
      "Explore Java Frameworks (Spring, Hibernate)",
      "Learn Java for Web Development (Servlets, JSP)",
    ],
  },
  // Add other languages with their roadmaps as needed...
];

const Languages: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  return (
    <div>
      {/* Programming Language Grid */}
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
          <div
            key={language.slug}
            onClick={() => setSelectedLanguage(language)} // Set the selected language
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
              cursor: "pointer", // Make it clickable
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>{language.icon}</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>{language.name}</div>
            <div style={{ fontSize: "14px", color: "#555" }}>{language.description}</div>
          </div>
        ))}
      </div>

      {/* Roadmap Section */}
      {selectedLanguage && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            {selectedLanguage.icon} {selectedLanguage.name} Roadmap
          </h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px" }}>
            {selectedLanguage.roadmap.map((step, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {step}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSelectedLanguage(null)} // Clear the selection
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Back to Languages
          </button>
        </div>
      )}
    </div>
  );
};

export default Languages;
