import { Component } from "react";
import ItemInput from "../ItemInput";
import ItemList from "../ItemList";
import "./ItemApp.css";

class ItemApp extends Component {
  constructor(props) {
    super(props);

    // component instance state
    this.state = {
      items: [],
    };

    // make it so that within functions, "this" refers to component instance
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    // "this" here refers to the component instance
    const updatedItems = this.state.items.concat(item);
    this.setState({ items: updatedItems });
  }

  render() {
    return (
      <div id="ItemAppClassComponent">
        <ItemInput addItem={this.addItem} />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default ItemApp;
