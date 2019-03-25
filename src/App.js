import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    tic: 0,
    times: 0
  }
  ticOrTac = (event) => {
    var x='X';
    var o='O';
    var tim=1;
    if (event.target.innerHTML!=="X" && event.target.innerHTML!=="O"&& document.getElementById("winner").innerHTML==="")
    {
      const va=this.state.tic;
    if(this.state.tic %2===0)
    {
      //console.log("ghusana hai");
      event.target.innerHTML=x
  }else{ 
    //console.log("mt ghusana");
    event.target.innerHTML=o;
    }this.setState({tic: (va+1)});
  const a= document.getElementById("1").innerHTML; 
  const b= document.getElementById("2").innerHTML; 
  const c= document.getElementById("3").innerHTML; 
  const d= document.getElementById("4").innerHTML; 
  const e= document.getElementById("5").innerHTML; 
  const f= document.getElementById("6").innerHTML; 
  const g= document.getElementById("7").innerHTML; 
  const h= document.getElementById("8").innerHTML; 
  const i= document.getElementById("9").innerHTML;
  if((a===b&&b===c&&a===x)||(a===d&&d===g&&d===x)||(d===e&&d===f&&e===x)||(h===i&&h===g&&g===x)||
  (e===b&&b===h&&b===x)||(f===i&&f===c&&f===x)||(a===e&&e===i&&a===x)||(c===e&&e===g&&e===x)){
     tim=this.state.times;
     console.log(tim);
    this.setState({times: tim+1});
    this.setState({tic: tim+1});
    if(tim%2===0)
      {document.getElementById("winner").innerHTML="<h3>Player 1 wins</h3>"; }
    else
    {document.getElementById("winner").innerHTML="<h3>Player 2 wins</h3>"; }
       console.log(this.state);
    } 
else if((a===b&&b===c&&a===o)||(a===d&&d===g&&d===o)||(d===e&&d===f&&e===o)||(h===i&&h===g&&g===o)||
  (e===b&&b===h&&b===o)||(f===i&&f===c&&f===o)||(a===e&&e===i&&a===o)||(c===e&&e===g&&e===o)){
    tim=this.state.times;
    console.log(tim);
    this.setState({times: (tim+1)});
    this.setState({tic: tim});
    if(this.state.times%2===0){
    document.getElementById("winner").innerHTML="<h3>Player 2 wins</h3>"; }
    else{
    document.getElementById("winner").innerHTML="<h3>Player 1 wins</h3>";}
    
    console.log(this.state);
}
else if(a!==""&&b!==""&&c!==""&&d!==""&&e!==""&&f!==""&&g!==""&&h!==""&&i!=="")
{
    document.getElementById("winner").innerHTML="<h3>Match Drawn</h3>"; 
    this.setState({times: (this.state.times+1)}); 
    this.setState({tic: (this.state.times)}); 
    console.log(this.state);
  }
else{
  document.getElementById("winner").innerHTML=""; 
} 
  }
}
newGame = () => {
      document.getElementById("1").innerHTML=""; 
      document.getElementById("2").innerHTML=""; 
      document.getElementById("3").innerHTML=""; 
      document.getElementById("4").innerHTML=""; 
      document.getElementById("5").innerHTML=""; 
      document.getElementById("6").innerHTML=""; 
      document.getElementById("7").innerHTML=""; 
      document.getElementById("8").innerHTML=""; 
      document.getElementById("9").innerHTML="";
      document.getElementById("winner").innerHTML=""; 
}
  render() {
    return (
      <div className="App">
        <h1>My name is Suyash</h1>
        <div className='row1'>
        <div className="area" id="1" onClick={this.ticOrTac}></div>
        <div className="area" id="2" onClick={this.ticOrTac}></div>
        <div className="area" id="3" onClick={this.ticOrTac}></div>
        </div>
        <div  className='row1'>
        <div className="area" id="4" onClick={this.ticOrTac}></div>
        <div className="area" id="5" onClick={this.ticOrTac}></div>
        <div className="area" id="6" onClick={this.ticOrTac}></div>
        </div>
        <div  className='row1'>
        <div className="area" id="7" onClick={this.ticOrTac}></div>
        <div className="area" id="8" onClick={this.ticOrTac}></div>
        <div className="area" id="9" onClick={this.ticOrTac}></div>
        </div>  
        <div id="winner">
          </div>   
        <div id="winner" onClick={this.newGame}>New game</div> 
      </div>
    );
  }
}

export default App;
