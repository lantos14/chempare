export default function compoundData(state = {
  name: null,
  img: null,
}, action) {
  switch (action.type) {
    case 'COMPOUND_RESULT_SUCCEEDED': {
      return {
        ...state,
        name: action.payload.compoundName,
        img: action.payload.data.image,
      };
    }

    default:
      return state;
  }
}
