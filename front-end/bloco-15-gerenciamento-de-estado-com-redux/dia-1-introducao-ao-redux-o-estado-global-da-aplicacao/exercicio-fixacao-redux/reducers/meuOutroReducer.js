const ESTADO_INICIAL = {
  hello: false,
  name: "",
  teste: "teste-2",
};

const meuReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        hello: !state.hello,
        name: action.name,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

export default meuReducer;