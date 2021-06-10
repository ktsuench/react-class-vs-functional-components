import { Component } from "react";

class ItemInput extends Component {
  constructor(props) {
    super(props);

    // component instance state
    this.state = {
      item: "",
    };

    // make it so that within functions, "this" refers to component instance
    this.updateItem = this.updateItem.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  updateItem(event) {
    const item = event.target.value;
    // "this" here refers to the component instance
    this.setState({ item: item });
  }

  addToList(event) {
    // prevent form from actually submitting
    event.preventDefault();
    // "this" here refers to the component instance
    if (this.state.item.trim() !== "") {
      this.props.addItem(this.state.item);
      this.setState({ item: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.addToList}>
        <input
          type="text"
          value={this.state.item}
          placeholder="enter new item"
          onChange={this.updateItem}
          data-testid="new-item-input"
        />
        <input type="submit" value="submit" data-testid="new-item-button" />
      </form>
    );
  }
}

export default ItemInput;
