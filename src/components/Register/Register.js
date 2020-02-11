import React from 'react';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://quiet-thicket-92850.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('signin');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba bg-white b--black-10 mv4 w-100 w-50-m w-40-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="db b ma0 f2 mb2　light-gray">登録</legend>
              <div className="mb3">
                <label className="db ttu b lh-copy" htmlFor="name">名前</label>
                <input
                  className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mb3">
                <label className="db ttu b lh-copy" htmlFor="email-address">メールアドレス</label>
                <input
                  className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mb3">
                <label className="db ttu b lh-copy" htmlFor="password">パスワード</label>
                <input
                  className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
          <div className="tc b f5 mt4 o-70 glow pa2 i">
           アカウントがあった?　➞<a onClick={() => onRouteChange('signin')} className="blue ph1" href="#">ログインしよう!</a>
          </div>
           
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b
                 ph3 pv2 input-reset db w-100 light-gray
                  f6 b pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill"
                type="submit"
                value="登録"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;