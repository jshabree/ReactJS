import React from 'react';
// // import logo from './logo.svg';
// import { Form, Input, Button } from "antd";
// // import { Tooltip, Select, Checkbox } from "antd";
// // import Icon from '@ant-design/icons';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  //   onTextChange = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     this.setState((prevState, prevProps) => {
  //       return {[name] : value}
  //     })
  //   }

  //   onSubmit = e => {
  //     e.preventDefault();
  //     console.log("username : "+this.state.username);
  //     console.log("password : "+this.state.password);
  //   };

  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;

//         <Form className = "form-inside-input" onSubmit = {this.onSubmit} noValidate>

//         <Input name = "username" value = {this.state.username} onChange = {this.onTextChange} placeholder="Enter your username" required/>

//         <Input.Password name = "password" value={this.state.password}  onChange = {this.onTextChange} placeholder="Enter your password" required />

//         <Button type="primary" onClick={this.onSubmit}>Submit</Button>

//         </Form>
