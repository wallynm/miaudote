// Explanation post
// https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6

const loadingReducer = (state = {}, action) => {
    const { type } = action
    const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type)
  
    // not a *_REQUEST / *_SUCCESS /  *_FAILED actions, so we ignore them
    if (!matches) return state
  
    const [, requestName, requestState] = matches
    return {
      ...state,
      // Store whether a request is happening at the moment or not
      // e.g. will be true when receiving GET_TODOS_REQUEST
      //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILED
      [requestName]: requestState === 'REQUEST',
    }
  }
  
  export default loadingReducer