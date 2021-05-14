import React from 'react';
import './style.css';


class Button extends React.Component {

  state = {
    text: "left"
    
  }

  clickBtn = () => {
    this.setState({

      text: "left",
      showleft: !true

    })
  }

  clickBtnR = () => {
    this.setState({

      text: "right",
      showleft: !true

    })
  }

  render() {
    return (
      <>
      <h1> Show {this.state.text} text</h1>
        <button id="leftBtn" onClick={this.clickBtn}>Show left</button>
        <button id="rightBtn" onClick={this.clickBtnR}>Show right</button>
      </>
    )
  }
}

const Display = (props) => {

  return (
    <div className="container">
      
      <Button />
      
    </div >
  )
}

export default Display;
