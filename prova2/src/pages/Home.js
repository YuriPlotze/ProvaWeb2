import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <h1>Home</h1>
        <div className="totals">
          <p><strong>Total Entradas:</strong> 6350</p>
          <p><strong>Total Saídas:</strong> 4140</p>
          <p><strong>Saldo Atual:</strong> 2210</p>
        </div>
      </main>
      <footer className="footer">
        Yuri Silva Plotze
      </footer>
    </div>
  );
};

export default Home;
