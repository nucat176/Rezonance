import React from 'react';
import {Link, withRouter} from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "", modalOpen: false, formType: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.__handleLoginClick = this.__handleLoginClick.bind(this);
    this.__handleSignupClick = this.__handleSignupClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.processForm = this.processForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.createFormHeader = this.createFormHeader.bind(this);
    this.startUsernameAnimation = this.startUsernameAnimation.bind(this);
    this.startPasswordAnimation = this.startPasswordAnimation.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      this.props.router.push("/home");
    }
  }

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
      return <span className='signup-here'>Don't have an account? Sign up <span className='signup-here'
                                                        onClick={this.__handleSignupClick}><span className="here-button">here!</span></span></span>;
    } else {
      return <span className='login-here'>Already have an account? Log in <span className='login-here'
                                                         onClick={this.__handleLoginClick}><span className="here-button">here!</span></span></span>;
    }
  }

  processForm(user){
    return this.state.formType === 'login' ? this.props.login(user) : this.props.signup(user);
  }

  createFormHeader(){
    if (this.state.formType === 'login'){
      return (<h1 className="form-header">Log In</h1>);
    } else {
      return (<h1 className="form-header">Sign Up</h1>);
    }
  }

  renderErrors(){
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
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

  startUsernameAnimation(){
    this.setState({modalOpen: true, formType: "login"});
		if(this.state.username.length > 0 || this.state.password.length > 0){
			this.clearFields();
		}

		const demoUser = 'Guest';
		let usernameID = setInterval(() => {
			document.getElementById('username').focus();
			let currLength = this.state.username.length;

			if(currLength < demoUser.length){
				this.setState({username: this.state.username + demoUser.slice(currLength, currLength + 1)});
			} else{
				clearInterval(usernameID);
				this.startPasswordAnimation();
			}
		}, 100);
	}

	startPasswordAnimation(){
		const demoPassword = 'password';
		let passwordID = setInterval(() => {
			document.getElementById('password').focus();
			let currLength = this.state.password.length;

			if(currLength < demoPassword.length){
				this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
			} else{
				clearInterval(passwordID);
        const user = {username: this.state.username, password: this.state.password};
        this.processForm(user);
			}
		}, 100);
	}

  closeModal(){
    this.setState({modalOpen: false});
  }

  render(){
    return (
      <div>
        <span className="log-in-button" onClick={this.__handleLoginClick}>Log In</span>
        &nbsp;
        &nbsp;
        <span className="sign-up-button" onClick={this.__handleSignupClick}>Sign Up</span>
        &nbsp;
        &nbsp;
        <span className="sign-up-button" onClick={this.startUsernameAnimation}>Guest Log In</span>
        <Modal
          className='auth-form-modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          >
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br/>
              <div className="form-errors">
                {this.renderErrors()}
              </div>
              <div className="login-form">
                {this.createFormHeader()}
                <div className='username-container'>
                  <h1 className="username-header">Username</h1>
                  <input type='text'
                    id="username"
                    value={this.state.username}
                    onChange={this.update("username")}
                    className="login-input"/>
                </div>
                <br/>
                <div className='username-container'>
                  <h1 className="username-header">Password</h1>
                  <input type='password'
                    id="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"/>
                </div>
                <br/>
                <input className="auth-form-submit-button" type="submit" value="Continue"/>
                <br/>
                <br/>
                {this.navLink()}
                <br/>
                <br/>
                <button className="modal-close" onClick={this.closeModal}>Close</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(AuthForm);
