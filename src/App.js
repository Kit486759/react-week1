import React from 'react';
import './style.css';

class Button extends React.Component {
constructor(props){
super(props);
  this.state = {
    left: true,
  }
}

  clickBtn = () => {
    this.setState({
      left: true
    })
  }

  clickBtnR = () => {
    this.setState({
      left: false
    })
  }

  render() {

    return (
      <div className="container">
        <h1> Show {this.state.left === true ? "left" : "right"} text</h1>
        <button id="leftBtn" onClick={this.clickBtn}>Show left</button>
        <button id="rightBtn" onClick={this.clickBtnR}>Show right</button>
      </div >

    )
  }
}



export default Button;