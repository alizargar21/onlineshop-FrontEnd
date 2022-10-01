const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE_LIST": {
        const updatedList = [...state.favoriteItems]
        updatedList.push(action.payload)
        console.log(state.favoriteItems)
      return state.favoriteItems;
    }
    case "REMOVE_FORM_FAVORITE_LIST": {
        const updatedList = [...state.favoriteItems]
        updatedList.remove(action.payload)
        console.log(state.favoriteItems)

      return state.favoriteItems;
    }

    default:
      return state;
  }
};

export default FavoriteReducer
