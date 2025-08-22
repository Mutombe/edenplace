import React from "react";
import { Toaster } from "sonner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import ModernHeader from "./components/header";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ModernHeader />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#f59e0b",
              color: "white",
              border: "none",
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
