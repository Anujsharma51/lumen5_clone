const init = { name: "" };

export const nameReducer = (state = init, action) => {
  console.log("action:", action.payload);
  switch (action.type) {
    case "go": {
      localStorage.setItem("name", action.payload.name);
      return { name: action.payload.name };
    }
    default: {
      return state;
    }
  }
};
