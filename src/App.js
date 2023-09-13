import React, { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stat from "./components/Stat";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((i) => [...i, newItem]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList items={items} />
        <Stat />
      </div>
    </>
  );
};

export default App;
