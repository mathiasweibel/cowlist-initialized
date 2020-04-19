import React from "react";

class TopCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null
    }
  }

  render() {
    return (
      <header>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
      </header>
    )
  }
};

export default TopCow;