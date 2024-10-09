import { Component } from "react";
import Button from "./Button";
import Notification from "./Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total:0,
  }
  
  incrementValue = ()=>{

  }

  
  render(){
    // const { good,neutral,bad,total} = this.state
    return(
      <>
      <Notification message="There is no feedback"/>
      <Button label="Positive" handleValue={this.incrementValue}/>
      <Button label="Neutral" handleValue={this.incrementValue}/>
      <Button label="Negative" handleValue={this.incrementValue}/>
      </>
    )
  }
}

export default App;