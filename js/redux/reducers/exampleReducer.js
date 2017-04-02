const initialState = { num: 1 };

export default function(state = initialState, action) {
  switch (action.type) {
    case 'expression':
      return state
      break;
    default:
      return state
  }
}
