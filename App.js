import React, { Component } from 'react';
import './App.css';
import Table from './Table'




class App extends Component {

  constructor(props){
    super(props)
    this.state={
      numCol:1,
      numRow:1,
      color: 'green',

    }
  }


  addRow(){
    this.setState({
      numRow: this.state.numRow+1
    })
  }
  addColumn (){
    this.setState({
      numCol: this.state.numCol+1
    })
  }

  removeRow(){
    this.setState({
      numRow: this.state.numRow-1
    })
  }

  removeColumn(){
    this.setState({
      numColumn: this.state.numColumn-1
    })
  }
  AddColor =(e)=>{
    console.log(e.target.value)


  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Table row= {this.state.numRow} column ={this.state.numCol} color ={this.state.color} />
          <button onClick= {this.addRow}> Add Row</button>
          <button onClick= {this.addColumn}> Add Column</button>
          <button onClick= {this.removeColumn}> Remove Column</button>
          <button onClick= {this.removeRow}> Remove Row</button>
<select onChange ={this.AddColor}>
  <option value = ""></option>
<option value = "blue">Blue</option>
<option value = "red">Red</option>

</select>
<button id= "clear">Clear </button>

        </div>
      </div>
    );
  }
}

export default App;
