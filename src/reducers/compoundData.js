export default function compoundData(state = {
  loading: false,
  name: null,
  img: null,
}, action) {
  switch (action.type) {
    case 'COMPOUND_RESULT_REQUESTED': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'COMPOUND_RESULT_SUCCEEDED': {
      return {
        ...state,
        name: action.payload.name,
        img: action.payload.data.image,
        loading: false,
      };
    }

    default:
      return state;
  }
}
