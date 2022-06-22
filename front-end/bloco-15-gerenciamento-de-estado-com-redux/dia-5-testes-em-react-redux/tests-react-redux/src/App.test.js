import React from "react";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import { legacy_createStore as createStore, combineReducers } from "redux";
import clickReducer from "./reducers";

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("testing clicks", () => {
  beforeEach(cleanup);
  test("the page should have a button and a text 0", () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText("Clique aqui");

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText("0")).toBeInTheDocument();
  });
  test("the page should have a button and a text 5", () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });
    const buttonAdicionar = queryByText("Clique aqui");

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText("5")).toBeInTheDocument();
  });
  test("the button should add 1 to the counter", () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText("Clique aqui");

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText("0")).toBeInTheDocument();

    fireEvent.click(buttonAdicionar);
    expect(queryByText("1")).toBeInTheDocument();
  });
  test("the button should add 1 to the counter, starting with an initial value of 10", () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 10 } },
    });
    const buttonAdicionar = queryByText("Clique aqui");

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText("10")).toBeInTheDocument();

    fireEvent.click(buttonAdicionar);
    expect(queryByText("11")).toBeInTheDocument();
  });
});
