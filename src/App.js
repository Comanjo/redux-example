import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'
import { connect } from 'react-redux'
import { like, dislike  } from './actions'

class App extends Component {
  render() {

    const { likes, onLike, onDislike } = this.props
    return (
      <div className="App">
        <div>Likes: {likes}</div>
        <button onClick={onLike}>+</button>
        <button onClick={onDislike}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    likes: state.likes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLike() {
      return dispatch(like())
    },
    onDislike() {
      return dispatch(dislike())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
