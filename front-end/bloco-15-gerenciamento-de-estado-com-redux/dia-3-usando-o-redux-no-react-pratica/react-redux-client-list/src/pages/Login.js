import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginAction } from "../redux/actions";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { login } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <fieldset>
          <label htmlFor="email">
            e-mail
            <input
              type="text"
              onChange={this.handleChange}
              value={email}
              name="email"
              required
            />
          </label>
          <label htmlFor="password">
            password
            <input
              type="password"
              onChange={this.handleChange}
              value={password}
              name="password"
              required
            />
            <Link to="/clients">
              <button
                type="button"
                label="login"
                onClick={() => login(this.state)}
              >
                Login
              </button>
            </Link>
          </label>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(loginAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
