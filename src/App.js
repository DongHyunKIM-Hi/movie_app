import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  min = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>i am a class{this.state.count} </h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.min}>-</button>
      </div>
    );
  }
}

export default App;
