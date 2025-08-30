import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import Dashboard from "./components/Dashboard";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <AuthGuard>
          <div className="App">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
            </Routes>
          </div>
        </AuthGuard>
      </Router>
    </BrowserRouter>
  );
}

export default App;
