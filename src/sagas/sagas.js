import "regenerator-runtime/runtime";
import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';
import getSvgTag from "../utilities/getSvg";

function* getCompoundResult(action) {
  try {
    const url = `${process.env.SERVER_DEV}/chemaxon`;
    const compoundNames = action.payload;
    const data = yield call(API.getData, url, compoundNames);

    data.compounds.forEach(compound => {
      compound.rawImg = getSvgTag(compound.rawImg);
    });
    
    yield put({
      type: 'COMPOUND_RESULT_SUCCEEDED',
      payload: {
        'data': data,
      }
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
    yield put({
      type: 'COMPOUND_RESULT_FAILED',
    });
  }
}

export default function* rootSaga() {
  yield takeEvery('COMPOUND_RESULT_REQUESTED', getCompoundResult);
}