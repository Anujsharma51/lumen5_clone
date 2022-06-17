const init = { name: "", auth: localStorage.getItem("auth") || false };

export const nameReducer = (state = init, action) => {
  console.log("action:", action.payload);
  switch (action.type) {
    case "go": {
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("auth", true);
      return { name: action.payload.name, auth: true };
    }
    default: {
      return state;
    }
  }
};
