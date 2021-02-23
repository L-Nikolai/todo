export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100000),
          listText: action.payload,
          checked: false,
        },
      ];
    case "delete":
      return state.filter((item) => item.id !== action.payload);
    case "checked":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });

    default:
      return state;
  }
};
