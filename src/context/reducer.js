export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic for basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case 'REMOVE_FROM_BASKET':
      // Logic for removing item from basket
      break;
    default:
      return state;
  }
}

export default reducer;
