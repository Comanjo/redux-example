import {
  DISLIKE,
  LIKE
} from '../actions'

export default (state = 0, action) => {
  switch (action.type) {
    case LIKE :
      return state + 1
    case DISLIKE :
      return state - 1
  }


  return state
}
