import react from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <h2>What would you like to eat?</h2>
      <div className="links">
        <Link to="/sardines">Sardines</Link>
        <br />
        <Link to="/chips">Chips</Link>
        <br />
        <Link to="/soda">Soda</Link>
      </div>
    </div>
  );
}

export default Home;
