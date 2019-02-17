const errorReducer = (state = {}, action) => {
    const { type, error } = action
    const matches = /(.*)_(REQUEST|FAILED)/.exec(type)
  
    // not a *_REQUEST / *_FAILED actions, so we ignore them
    if (!matches) return state
  
    const [, requestName, requestState] = matches
    return {
      ...state,
      // Store errorMessage
      // e.g. stores errorMessage when receiving GET_TODOS_FAILED
      //      else clear errorMessage when receiving GET_TODOS_REQUEST
      [requestName]: requestState === 'FAILED' ? error : '',
    }
  }
  
  export default errorReducer