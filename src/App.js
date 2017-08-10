import React from 'react';

import Counter from './Counter';
import Display from './Display';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      items: [],
    };
    this.counterClick = this.counterClick.bind(this);
    this.popItems = this.popItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  counterClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log("App state.counter set to: ", this.state.counter + 1);
  }

  addItem() {
    setTimeout(() => {
      let items = this.state.items.slice();
      let n = Math.floor(Math.random() * 100);
      items.push(n);
      this.setState({
        items: items,
      });
      console.log("in addItems, items ", this.state.items);
    },
    Math.floor(Math.random() * 7000));
  }

  popItems() {
    console.log("popItems depressed. counter = ", this.state.counter);
    for (let i=0; i<this.state.counter; i++) {
      this.addItem();
    }
  }

  render() {
    return (
        <div>
        <Counter
        value={this.state.counter}
        onClick={() => this.counterClick()}
        />
        <button onClick={this.popItems}>
        Submit
        </button>
        <Display
        items={this.state.items}
        />
        </div>
        );
  }
}

export default App;
