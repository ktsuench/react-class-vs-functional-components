import { useState } from "react";
import ItemInput from "../ItemInput";
import ItemList from "../ItemList";
import "./ItemApp.css";

function ItemApp() {
  const [items, setItems] = useState([]);
  const addItem = function (item) {
    setItems(items.concat(item));
  };

  return (
    <div id="ItemAppFunctionalComponent">
      <ItemInput addItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default ItemApp;
