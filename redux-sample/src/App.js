import React from 'react';
import { connect } from "react-redux";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";
// import logo from './logo.svg';
import { Form, Input, Button } from "antd";
import {loginUser} from './redux/actions/index';
// import { Tooltip, Select, Checkbox } from "antd";
// import Icon from '@ant-design/icons';

const errorValidationLabel = ({ textLabel }) => (
  <label htmlFor = "" style = {{ color: "red", display: "block"}}>
  </label>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: '',
      isValid: true,
      result: ''
    }
  } 

  onTextChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState((prevState, prevProps) => {
        return {[name] : value}
      })
  }


  isValid = () => {
    const {username, password} = this.state;
    if(username.length === 0 || password.length === 0){
      this.state({ isValid : false, errorMessage : "Cannot leave fields empty"});
      return false;
    }
    return true;
  }

  onSubmit = e => {
      e.preventDefault();
      const { username, password } = this.state;
      if(this.isValid()) {
        this.props.dispatch(loginUser(username, password));
      }
  };

  static getDerivedStateFromProps(newProps, prevState) {
    if(newProps.result !== prevState.result) {
      console.log(newProps.result);
    }
    return null;
  }

  render() {
    const { username, password, errorMessage, isValid } = this.state;
    const renderValidationError = isValid ? "" : <errorValidationLabel textLabel = { errorMessage} />;

    return (
      <div className = "App">
      <Form>
      <Input
        placeholder="Enter your username"
        name = "username" 
        value = {this.state.username} 
        onChange = {this.onTextChange}  />

      <Input.Password
        placeholder="Enter your password"
        name = "password" 
        value={this.state.password} 
        onChange = {this.onTextChange}  />

      <Button type = "primary" onClick={this.onSubmit}> Submit </Button>
      {renderValidationError}

      </Form>
      
      </div>


    );

  }
}

const mapStateToProps = state => {
  return {
    result: state.login.result
  };
};

export default connect(mapStateToProps)(App);