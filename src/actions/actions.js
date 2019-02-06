export function getCompound(compoundName) {
  return {
    type: 'COMPOUND_RESULT_REQUESTED',
    payload: compoundName,
  };
} 
