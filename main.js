import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import { store } from './conf'

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().counter}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
