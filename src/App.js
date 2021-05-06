import React, { Component } from "react";
import Counter from "./components/Counter";

export class App extends Component {
  state = {
    isShow: false,
  };
  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render() {
    return (
      <div style={{textAlign:"center", marginTop:"250px"}}>
        <button onClick={this.handleClick}> 
          {this.state.isShow ? "Hide" : "Show"}
        </button> <br/>
        {this.state.isShow ? <Counter /> : "Taper  yebane"}
      </div>
    );
  }
}

export default App;
