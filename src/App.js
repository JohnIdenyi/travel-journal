
import Header from "./components/Header";
import React from "react";
import Card from "./components/Card";
import {data} from "./data";

function App() {
  const cards = data.map(item => {
    return <Card
      key={item.id}
      {...item}
    />
  });

  return (
    <div>
      <Header />
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}

export default App;
