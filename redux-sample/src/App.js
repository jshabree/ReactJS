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
        <Input.Password placeholder="input password" />
        <Button type="primary">Submit</Button>
        </Form>

      </div>
    );
  }  
}

export default App;