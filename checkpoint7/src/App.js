import React from "react";
import logo from './logo.svg';
import {Profile} from "./profile.js"
import './App.css';

class App extends React.Component {

  state = {

    Person : {fullName: 'Redha BENAMARA' ,bio: 'Energy', imgSrc:'logo192.png', profession:'Developer'},
    isShowed : false,
    Count : 0

  };

  
  componentDidMount() {
    setInterval(() => {
      if (!this.state.isShowed){this.setState({Count : this.state.Count + 1})}
    },1);
  }


  Show = () => {

    this.setState({isShowed : true});

  };

 render() {

  if (this.state.isShowed) {

  return (
    <>
      <Profile person = {this.state.Person}/>
      <h3 align='center'> Rendred after {this.state.Count} ms</h3>
    </>
    );
  }

  return (
      <>
        <div className="App">
          <button onClick={this.Show}>Show</button>
        </div>
        
      </>
    );
  }
 }

export default App;



