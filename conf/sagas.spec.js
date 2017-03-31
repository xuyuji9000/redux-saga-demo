import test from 'tape'

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { incrementAsync } from './sagas'

test('incrementAsync saga test', (assert) =>{
    const gen = incrementAsync()

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync should return a Promise that will resolve after 1 second'
    )

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
    )

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
    )

    assert.end()
})
