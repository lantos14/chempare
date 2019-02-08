export default function compoundData(state = {
  loading: false,
  compounds: [],
  comparison: false,
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
        loading: false,
        compounds: action.payload.data.compounds,
        comparison: action.payload.data.comparison,
      };
    }

    default:
      return state;
  }
}
