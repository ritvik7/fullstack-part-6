export let timeoutId

export const setNotification = (text, timeout) => async dispatch => {
  dispatch({
    type: 'SET',
    data: text
  })
  clearTimeout(timeoutId)
  timeoutId = await setTimeout(() => dispatch(clearNotification(timeoutId)), timeout)
}

export const clearNotification = (id) => {
  return {
    type: 'CLEAR',
    data: ''
  }
}

const notificationReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET': return action.data
    case 'CLEAR': return action.data
    default: return state
  }
}

export default notificationReducer