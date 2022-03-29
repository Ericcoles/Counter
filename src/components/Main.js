import React, { Component } from "react";
import Circle from "./UI components/Circle";
import Button from "./UI components/Button";

class Main extends React.Component {
  state = {
    counter: 0,
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
      counter: 0,
    });
  };

  addOneHandler4 = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  addOneHandler5 = () => {
    this.state.counter < 5
      ? this.setState({
          counter: 0,
        })
      : this.setState({
          counter: this.state.counter - 5,
        });
  };
  // console.log("wow you can really code");

  render() {
    let classStyle = "circle";

    if (this.state.counter % 2 == 0) {
      classStyle += " even";
    } else {
      classStyle += " odd";
    }

    return (
      <main>
        <div>
          <div className={classStyle}>
            <h1>{this.state.counter}</h1>
          </div>
          <Circle counter={this.state.counter} />
          <Button click={this.addOneHandler} type="primary" value="Add 5" />
          <Button click={this.addOneHandler2} type="secondary" value="Add 1" />
          <Button click={this.addOneHandler3} value="Reset" />
          <Button click={this.addOneHandler4} value="Remove 1" />
          <Button click={this.addOneHandler5} value="Remove 5" />
          {/* <button onClick={this.addOneHandler}>Add 5</button>
          <button onClick={this.addOneHandler2}>Add 1</button>
          <button onClick={this.addOneHandler3}>Reset</button>
          <button onClick={this.addOneHandler4}>Remove 1</button>
          <button onClick={this.addOneHandler5}>Remove 5</button> */}
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
