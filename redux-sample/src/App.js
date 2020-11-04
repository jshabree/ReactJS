import React from 'react';
import logo from './logo.svg';
import { Form, Input, Tooltip, Button, Select, Checkbox } from "antd";
import Icon from '@ant-design/icons';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Form>
        <Input
          placeholder="Enter your username"
          />
        <span>
        <Input.Password placeholder="input password" />
        </span>
        
        <span>
        <Button type="primary">Submit</Button>
        </span>
        
        </Form>

      </div>
    );
  }  
}

export default App;