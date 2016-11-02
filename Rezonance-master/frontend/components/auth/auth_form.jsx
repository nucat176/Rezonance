import React from 'react';
import {Link, withRouter} from 'react-router';

class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "", mode: "username"};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink(){
    if (this.props.formType === "login") {
      return <Link to="/signup">don't have an account? Sign up here!</Link>;
    } else {
      return <Link to="/login">already have an account? Log in here!</Link>;
    }
  }

  renderErrors(){
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={'error-${i}'}>
              {error}
            </li>
          ))}
      </ul>
    );
  }

  render(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Rezonance!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <label>
              Username:
              <input type='text'
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"/>
            </label>
            <br/>
            <label>
              Password:
              <input type='password'
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"/>
              (Must be at least 6 characters)
            </label>
            <br/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthForm;
