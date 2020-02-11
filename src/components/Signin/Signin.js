import React from 'react';
import './Signin.css';
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
      //fetch('http://localhost:3000/signin', {
      fetch('https://quiet-thicket-92850.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 bg-white ba b--black-10 mv4 w-100 w-50-m w-40-l mw6 shadow-5 center">
      <main className="pa4 black-80">
      <div className="measure">
       <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="db b ma0 f2 mb2">ログイン</legend>
        
        
          <div className="mb3">
            <label className="db b lh-copy" htmlFor="email-address">メールアドレス</label>
                <input
                  className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
          </div>
          <div className="mb3">
            <label className="db b lh-copy" htmlFor="password">パスワード</label>
                <input
                  className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
          </div>
          </fieldset>
          <div className="">
           <input
                onClick={this.onSubmitSignIn}
                className="b
                 ph3 pv2 input-reset db w-100 light-gray
                  f6 b pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill"
                type="submit"
                value="ログイン"
              />
           
          </div>
       
        
        <div className="tc b f5 mt4 o-70 glow pa2 i">
          新規? ➞<a onClick={() => onRouteChange('register')} className="blue ph1" href="#">登録</a>
        </div>
        
      </div>
      </main>
      </article>
    );
  }
}

export default Signin;