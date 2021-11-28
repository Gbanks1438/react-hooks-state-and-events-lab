import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(false);
  const modeChange = () =>{
    setItems(!items)
  }
  const appClass = items ? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={modeChange}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;