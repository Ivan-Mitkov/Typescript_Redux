import React from 'react'
import {Provider} from 'react-redux'
import {store} from '../state'
import RepositoryList from './RepositoryList'
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a repository</h1>
        <RepositoryList/>
      </div>
    </Provider>
  )
}

export default App
