'use strict'


import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'
//import PracticeCampuses from './components/PracticeCampuses'

render (
  <Provider store={store}>
  <div>
    <Main />
    
  </div>
   </Provider>,
  document.getElementById('main')
)