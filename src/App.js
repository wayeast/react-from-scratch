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
  }

  counterClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log("App state.counter set to: ", this.state.counter + 1);
  }

  popItems() {
    console.log("popItems depressed. counter = ", this.state.counter);

    let ws = new WebSocket('ws://127.0.0.1:8888/ws');
    ws.onopen = () => {
        console.log("ws connection opened");
        ws.send(
            JSON.stringify({"count": this.state.counter})
        );
    };
    ws.onmessage = (e) => {
        console.log("ws received message: ", e.data);
        let payload = JSON.parse(e.data);
        console.log("value: ", payload["value"]);
        let items = this.state.items.slice();
        items.push(payload["value"]);
        this.setState({
            items: items,
        });
        console.log("in addItems, items ", this.state.items);
    };
    ws.onclose = (e) => {
        console.log("ws received connection close: ", e.code, e.reason);
    };
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
