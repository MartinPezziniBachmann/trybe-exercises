import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addClientAction } from "../redux/actions";

export class AddClients extends Component {
  state = {
    name: "",
    age: "",
    email: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, age, email } = this.state;
    const { addClient } = this.props;

    return (
      <div>
        <h1>Add clients</h1>
        <fieldset>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              onChange={this.handleChange}
              value={name}
              name="name"
              required
            />
          </label>
          <label htmlFor="age">
            Idade:
            <input
              type="text"
              onChange={this.handleChange}
              value={age}
              name="age"
              required
            />
          </label>
          <label htmlFor="email">
            e-mail:
            <input
              type="text"
              onChange={this.handleChange}
              value={email}
              name="email"
              required
            />
          </label>
          <Link to="/clients">
            <button
              type="button"
              label="login"
              onClick={() => addClient(this.state)}
            >
              Adicionar cliente
            </button>
          </Link>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addClient: (state) => dispatch(addClientAction(state)),
});

export default connect(null, mapDispatchToProps)(AddClients);
