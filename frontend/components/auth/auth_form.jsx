import React from 'react';
import {Link, withRouter} from 'react-router';
import Modal from 'react-modal';

class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "", modalOpen: false, formType: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.__handleLoginClick = this.__handleLoginClick.bind(this);
    this.__handleSignupClick = this.__handleSignupClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.processForm = this.processForm.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  // redirectIfLoggedIn(){
  //   if (this.props.loggedIn){
  //     this.props.router.push("/");
  //   }
  // }

  handleSubmit(e){
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password};
    this.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink(){
    if (this.state.formType === "login") {
      return <span>don't have an account? Sign up <span className='signup-here'
                                                        onClick={this.__handleSignupClick}>here!</span></span>;
    } else {
      return <span>already have an account? Log in <span className='login-here'
                                                         onClick={this.__handleLoginClick}>here!</span></span>;
    }
  }

  processForm(user){
    return this.state.formType === 'login' ? this.props.login(user) : this.props.signup(user);
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

  __handleLoginClick(){
    this.setState({modalOpen: true, formType: "login"});
  }

  __handleSignupClick(){
    this.setState({modalOpen: true, formType: "signup"});
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  render(){
    return (
      <div>
        <span className="log-in-button" onClick={this.__handleLoginClick}>Log In</span>
        &nbsp;or&nbsp;
        <span className="sign-up-button" onClick={this.__handleSignupClick}>Sign Up</span>
        <Modal
          className='auth-form-modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          >
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              Welcome to Rezonance!
              <br/>
              Please {this.state.formType} or {this.navLink()}
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
        </Modal>
      </div>
    );
  }
}

export default AuthForm;
