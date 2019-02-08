export function getCompound(compoundNames) {
  console.log('compoundNames: ', compoundNames);
  return {
    type: 'COMPOUND_RESULT_REQUESTED',
    payload: compoundNames,
  };
} 
