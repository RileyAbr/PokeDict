import React from "react";

import "./styles.css";

// Components Import
import PokeCard from "../PokeCard";

function Home() {
  return (
    <div className="home-wrapper">
      {/* Navigation Section */}
      <div>
        <div>Left Arrow</div>
        <div>
          <input type="text" placeholder="Pokedex"></input>
        </div>
        <div>Right Arrow</div>
      </div>
      {/* Pokemon Cards */}
      <div className="gallery-wrapper">
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </div>
    </div>
  );
}

export default Home;
