import React from 'react';
// import logo from './logo.svg';
import { Form, Input, Button } from "antd";
// import { Tooltip, Select, Checkbox } from "antd";
// import Icon from '@ant-design/icons';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onTextChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState, prevProps) => {
      return {[name] : value}
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("username : "+this.state.username);
    console.log("password : "+this.state.password);
  };

  render(){
    return (
      <div className="App">
        <Form>

        <Input placeholder="Enter your username"
        name = "username"
        value = {this.state.username}
        onChange = {this.onTextChange}
        />

        <Input.Password name = "password" onChange = {this.onTextChange} value={this.state.password} placeholder="Enter your password" />

        <Button type="primary"  onClick={this.handleSubmit}>Submit</Button>
        
        </Form>

      </div>
    );
  }  
}

export default App;