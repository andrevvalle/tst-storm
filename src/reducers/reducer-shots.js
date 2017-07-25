let initialState = {
  loaded: false,
  shotsList: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_SHOTS':
      state.loaded = true
      return {
        ...state,
        shotsList: action.payload
      }
    default:
      return state
  }
}
