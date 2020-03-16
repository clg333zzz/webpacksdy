// import helloworld from './hello'
// helloworld()

// const arr01 = [1, 2, 3]
// const arr02 = [...arr01]
// console.log("==arr02==", arr02)

import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/logo.png'
import right from './images/right.png'
import './search.less'

class Search extends React.Component {
  render() {
    return <div className="search-text">Search Text 51<img src={ logo } /><img src={ right } /></div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)