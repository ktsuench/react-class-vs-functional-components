/**
 * @param {object} props
 * @param {string[]} props.items
 * @returns {JSX.Element}
 */
function ItemList(props) {
  const items = [];

  for (let i = 0; i < props.items.length; i++) {
    const listItem = <li key={i}>{props.items[i]}</li>;
    items.push(listItem);
  }

  return <ul>{items}</ul>;
}

export default ItemList;
