export function getCompound(compoundNames) {
  return {
    type: 'COMPOUND_RESULT_REQUESTED',
    payload: compoundNames,
  };
} 
