import { Component } from "react";

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const items = [];

    for (let i = 0; i < this.props.items.length; i++) {
      const listItem = <li key={i}>{this.props.items[i]}</li>;
      items.push(listItem);
    }

    return <ul>{items}</ul>;
  }
}

export default ItemList;
