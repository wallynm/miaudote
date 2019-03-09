import dotProp from 'dot-prop-immutable'

import {
  SET_ANIMAL_FAVORITE,
  SET_ANIMAL_LIKE
} from './actionTypes'

export const initialState = {
  name: ''
}

const ACTION_HANDLERS = {
  [SET_ANIMAL_FAVORITE]: (state, action) => dotProp.toggle(state, `${parseInt(action.payload.animalId) - 1}.favorite`),
  [SET_ANIMAL_LIKE]: (state, action) => dotProp.toggle(state, `${parseInt(action.payload.animalId) - 1}.like`)
}

const reducers = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default reducers