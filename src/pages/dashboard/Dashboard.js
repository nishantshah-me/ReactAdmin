import React, { Component, lazy, Suspense } from "react";
import Tile from "./../../components/Tile";
function Dashboard() {
  return (
    <div className="App">
      <div className="App-tile">
        <Tile title="Total Riders" value="131" bgColor="bg-primary" />
        <Tile title="Total Driver" value="232" bgColor="bg-warning" />
        <Tile title="Total Rides" value="1000" bgColor="bg-danger" />
        <Tile title="Revenue" value="$92,012" bgColor="bg-success" />
      </div>

      <header className="App-header"></header>
    </div>
  );
}

export default Dashboard;
