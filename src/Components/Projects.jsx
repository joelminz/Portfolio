import React from "react";


function Projects() {
  const projects = [
    {
      name: "Decentralized Voting System",
      description:
        "Decentralized voting system using blockchain we have implemented is a secure and transparent platform for modern elections. By leveraging blockchain, each vote is recorded immutably, preventing tampering or manipulation. Built with Django, the backend manages users, elections, and votes, while custom cryptographic modules ensure secure vote handling. Merkle trees provide verifiable proof of vote inclusion without compromising privacy. The user-friendly frontend offers real-time updates and visualizations. Strong authentication ensures only eligible voters participate, and each can vote only once. This modular, extensible system demonstrates how blockchain and cryptography can deliver trustworthy, auditable, and private digital voting solutions.",
      link: "https://github.com/joelminz/DecentralizedVotingSysytem",
    },
    {
      name: "Shopping Cart",
      description:
        "This project is a modern e-commerce web application called TrueBuy, built with React and Vite. It features a responsive user interface with Bootstrap styling and allows users to browse a wide range of products, view detailed product information, and filter items by category or brand. The app includes user authentication pages for login and registration, as well as dedicated sections for personal information, order history, and founder details. Product data is fetched from an external API, and loading states are handled with a custom shimmer UI. The project demonstrates clean component structure and smooth navigation using React Router.",
      link: "https://github.com/joelminz/TrueBuy-Shopping",
    },
    {
      name: "Fitverse Application",
      description:
        "FitVerse is a comprehensive fitness and wellness application designed to help users achieve their health goals through personalized workout plans, nutrition tracking, and progress monitoring. The platform offers a user-friendly interface where individuals can log exercises, track calories, and set fitness milestones. FitVerse integrates social features, allowing users to connect, share achievements, and motivate each other within a supportive community. With real-time analytics and tailored recommendations, the app adapts to each user’s evolving needs. Whether you’re a beginner or an experienced athlete, FitVerse provides the tools and guidance necessary to maintain a healthy lifestyle and reach your fitness aspirations efficiently.",
      link: "https://github.com/joelminz/FitVerse",
    },
    {
      name: "Expense Tracker",
      description:
        "A simple and intuitive app to track daily expenses and visualize spending habits.",
      link: "https://github.com/joelminz/expense-tracker",
    },
  ];

  return (
    <div className="container pt-3 pb-5">
      <h1 className="text-center mt-2 mb-5">My Projects</h1>
      <div>
        {projects.map((proj, index) => (
          <div className="mb-4" key={index}>
            <div className="card shadow w-100 mx-3">
              <div className="card-header bg-primary text-white text-center">
                <h2 className="mb-0">{proj.name}</h2>
              </div>
              <div className="card-body">
                <p className="card-text text-center px-4 py-3">
                  {proj.description}
                </p>
              </div>
              <div className="card-footer text-center">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                  style={{ color: "red" }}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
