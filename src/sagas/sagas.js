import "regenerator-runtime/runtime";
import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';
import getSvgTag from "../utilities/getSvg";

function* getCompoundResult(action) {
  try {
    const url = `${process.env.SERVER_DEV}/chemaxon`;
    const compoundName = action.payload;
    const data = yield call(API.getData, url, compoundName);
    const svgTag = getSvgTag(data.image);
    yield put({
      type: 'COMPOUND_RESULT_SUCCEEDED',
      payload: {
        'name': compoundName,
        'svgTag': svgTag,
      }
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('COMPOUND_RESULT_REQUESTED', getCompoundResult);
}