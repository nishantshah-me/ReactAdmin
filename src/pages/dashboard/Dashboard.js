import React, { Component, lazy, Suspense } from "react";
import Tile from "./../../components/Tile";
function Dashboard() {
  return (
    <div className="App">
      <div>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>

      <header className="App-header"></header>
    </div>
  );
}

export default Dashboard;
