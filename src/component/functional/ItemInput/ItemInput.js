import { useState } from "react";

/**
 * @param {object} props
 * @param {(item:string) => void} props.addItem
 * @returns {JSX.Element}
 */
function ItemInput(props) {
  const [item, setItem] = useState("");
  const updateItem = function (event) {
    setItem(event.target.value);
  };
  const addToList = function (event) {
    // prevent form from actually submitting
    event.preventDefault();
    if (item.trim() !== "") {
      props.addItem(item);
      setItem("");
    }
  };

  return (
    <form onSubmit={addToList}>
      <input
        type="text"
        value={item}
        placeholder="enter new item"
        onChange={updateItem}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default ItemInput;
