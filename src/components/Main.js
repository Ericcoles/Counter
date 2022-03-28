import React, { Component } from "react";
import Circle from "./Circle";

class Main extends React.Component {
  state = {
    counter: 1000,
  };

  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };

  addOneHandler2 = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  addOneHandler3 = () => {
    this.setState({
      counter: 1000,
    });
  };

  addOneHandler4 = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  addOneHandler5 = () => {
    this.setState({
      counter: this.state.counter - 5,
    });
  };
  // console.log("wow you can really code");

  render() {
    return (
      <main>
        <div>
          <div className="circle">
            <h1>{this.state.counter}</h1>
          </div>
          <Circle counter={this.state.counter} />
          <button onClick={this.addOneHandler}>Add 5</button>
          <button onClick={this.addOneHandler2}>Add 1</button>
          <button onClick={this.addOneHandler3}>Reset</button>
          <button onClick={this.addOneHandler4}>Remove 1</button>
          <button onClick={this.addOneHandler5}>Remove 5</button>
        </div>
      </main>
    );
  }
}

// const Main = () => {
//   const clickHandler = () => {
//     console.log("click worked");
//   };

//   return (
//     <main>
//       <div>
//         <div className="circle">
//           <h1>0</h1>
//         </div>
//         <button onClick={clickHandler}>Add 5</button>
//         <button>Add 1</button>
//         <button>Reset</button>
//         <button>Remove 1</button>
//         <button>Remove 5</button>
//       </div>
//     </main>
//   );
// };

export default Main;
