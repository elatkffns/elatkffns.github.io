import "./App.module.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <ul>
        <li>
          <Link to="Study">asldfja;sidfja;lsdkjf</Link>
          <Outlet />
        </li>
      </ul>
    </div>
  );
}

export default App;
