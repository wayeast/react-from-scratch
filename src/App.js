import React from 'react';

import Counter from './Counter';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  counterClick() {
    this.setState({ counter: this.state.counter + 1, });
    console.log("App state set to: ", this.state.counter + 1);
  }

  render() {
    return (
        <div>
        <Counter
        value={this.state.counter}
        onClick={() => this.counterClick()}
        />
        </div>
        );
  }
}

export default App;
