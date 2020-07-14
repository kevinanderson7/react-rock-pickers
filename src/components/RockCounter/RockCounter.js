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
    this.setState({
      rocksPicked: this.state.rocksPicked + 1,
    });
    console.log(this.state.rocksPicked);
  };

  clickDecrease = () => {
    console.log('clicked decrease');
    this.setState({
      rocksPicked: this.state.rocksPicked - 1,
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
          <button>Reset</button>
        </div>
      </div>
    );
  }
}

export default RockCounter;
