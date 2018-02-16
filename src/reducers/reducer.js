export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case 'foo':
      //
    default:
      return state
  }
}

