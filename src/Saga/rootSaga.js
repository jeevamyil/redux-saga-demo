import todoSaga from './todoSaga';
import {all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([...todoSaga])
}