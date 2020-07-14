import React, { Component } from 'react';

class RockCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocksPicked: 0,
    };
  }
  clickIncrease = () => {
    console.log('clicked increase');
    if (this.state.rocksPicked < 50) {
      this.setState({
        rocksPicked: this.state.rocksPicked + 1,
      });
      console.log(this.state.rocksPicked);
    } else {
      this.setState({
        rocksPicked: `${this.state.rocksPicked} DONE`,
      });
    }
  };

  clickDecrease = () => {
    console.log('clicked decrease');
    if (this.state.rocksPicked > 0) {
      this.setState({
        rocksPicked: this.state.rocksPicked - 1,
      });
      console.log(this.state.rocksPicked);
    } else {
      this.setState({
        rocksPicked: 0,
      });
    }
  };

  clickReset = () => {
    console.log('clicked reset');
    this.setState({
      rocksPicked: 0,
    });
    console.log(this.state.rocksPicked);
  };

  render() {
    return (
      <div>
        <div>Rocks Picked: {this.state.rocksPicked}</div>
        <div>
          <button onClick={this.clickIncrease}>Increase</button>
          <button onClick={this.clickDecrease}>Decrease</button>
          <button onClick={this.clickReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default RockCounter;
