import {
  SET_ANIMAL_FAVORITE,
  SET_ANIMAL_LIKE
} from './actionTypes'


export const setAnimalFavorite = animalId => async (dispatch, getState) => {
  dispatch({ 
    type: SET_ANIMAL_FAVORITE, 
    payload: {
      animalId
    }
  })
}

export const setAnimalLike = animalId => async (dispatch, getState) => {
  dispatch({ 
    type: SET_ANIMAL_LIKE, 
    payload: {
      animalId
    }
  })
}