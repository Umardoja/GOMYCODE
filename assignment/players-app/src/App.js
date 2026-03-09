import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Famous Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;