import { takeEvery, call, put, select, take, fork, all, takeLatest } from 'redux-saga/effects';
import * as Types from "../actions/types";
import { getDataFromServer, deleteTodoAPI } from '../service';

const baseURL = '';

function* fetchLoginUser(action) {
// function to make service call 
    try {
        console.log("Action -> " + JSON.stringify(action));
        let formBody = {}
        formBody.firstName = "Juveria"; // action.code
        formBody.lastName = "S"; //action.provider
        formBody.age = "24"
        const requestMethod = "GET";
        const loginURL = baseURL + '/view';;
        const response = yield call(getDataFromServer, loginURL, '', '')


        const result = yield response.json();
        console.log("ADS" + result.workingDetails);
        console.log("Result ->" + JSON.stringify(result))
        console.log('Result JSON' + result);
        if(result.error) {
            yield put ({ type: "LOGIN_USER_RESPONSE_FAIL", error: result.error });
        }
        else {
            yield put ({ type: Types.LOGIN_USER_RESPONSE_SUCCESS, result });
        }
    }
    catch(error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield takeLatest(Types.LOGIN_USER, fetchLoginUser);

    console.log(" Root Saga");
}