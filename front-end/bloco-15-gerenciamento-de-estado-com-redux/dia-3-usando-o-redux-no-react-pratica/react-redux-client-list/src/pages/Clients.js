import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeClientAction } from "../redux/actions";

export class Clients extends Component {
  state = {
    sorted: false,
  };
  render() {
    const { email, logged, clients, removeClient } = this.props;
    const { sorted } = this.state;

    const clientsList = [...clients];
    if (sorted)
      clientsList.sort((a, b) =>
        [a.name, b.name].sort()[0] === a.name ? -1 : 1
      );

    return (
      <div>
        <h1>Clients</h1>
        {!logged ? (
          <p>Login não efetuado</p>
        ) : (
          <div>
            <h2>{email}</h2>
            <h3>logado</h3>
            <Link to="/clients/add-client">
              <button type="button" label="add-client">
                Adicionar cliente
              </button>
            </Link>
            <button
              type="button"
              label="order-clients"
              onClick={() =>
                this.setState((prevState) => ({ sorted: !prevState.sorted }))
              }
            >
              Ordenar
            </button>
            <div>
              {!clients ? (
                <p>Nenhum cliente cadastrado</p>
              ) : (
                <div>
                  {clientsList.map((client) => (
                    <div>
                      <h4>{`Nome: ${client.name}`}</h4>
                      <p>{`Idade: ${client.age}`}</p>
                      <p>{`Email: ${client.email}`}</p>
                      <button
                        type="button"
                        label="remove-client"
                        onClick={() => removeClient(client.name)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.login.email,
  logged: state.login.logged,
  clients: state.clients.clients,
});

const mapDispatchToProps = (dispatch) => ({
  removeClient: (state) => dispatch(removeClientAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
