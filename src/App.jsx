// src/App.js

import MapView from "./components/MapView";
import AlertPanel from "./components/AlertPanel";
import data from "./data/mockData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" , minHeight: "100vh"}}>

      <Navbar />
      <h1>🦠 Disease Outbreak Dashboard</h1>

      <MapView data={data} />

      <AlertPanel data={data} />
    </div>
  );
}

export default App;