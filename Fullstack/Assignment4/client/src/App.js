import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Feed from "./components/Feed";
import "./App.css"; 

function App() {
  const [user, setUser] = useState(null); // Holds logged-in user
  const [view, setView] = useState("register"); // Can be 'register' or 'login'

  // If no user is logged in, show Register or Login view
  if (!user) {
    return (
      <div className="app-container">
        <div className="auth-toggle">
          <button
            onClick={() => setView("register")}
            className={view === "register" ? "active" : ""}
          >
            Register
          </button>
          <button
            onClick={() => setView("login")}
            className={view === "login" ? "active" : ""}
          >
            Login
          </button>
        </div>

        {/* Show either Register or Login based on view */}
        {view === "register" ? (
          <Register setUser={setUser} />
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    );
  }

  // If user is logged in, show the Feed
  return (
    <div className="app-container">
      <Feed user={user} />
    </div>
  );
}

export default App;

