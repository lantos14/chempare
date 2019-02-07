export default function compoundData(state = {
  text: 'waiting for update'
}, action) {
  switch (action.type) {
    case 'COMPOUND_RESULT_SUCCEEDED': {
      return {
        ...state,
        text: action.payload.msg,
      };
    }

    default:
      return state;
  }
}
