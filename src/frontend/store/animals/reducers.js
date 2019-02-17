import dotProp from 'dot-prop-immutable'

import {
    SET_USER_AUTH
} from './actionTypes'

export const initialState = {
  name: ''
}

const ACTION_HANDLERS = {
  [SET_USER_AUTH]: state => dotProp.set(state, 'order.customer.has_password', true)
}

const reducers = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default reducers