import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topCow: null,
      allCows: []
    };
  }

  //

  render() {
    return (
      <div>
        <TopCow cow={topCow} />
        <p>Top Cow Section</p>
        <CowList list={allCows} />
        <p>Cow List Section</p>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);