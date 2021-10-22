export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = (friendId) => ({
    type: ADD_FAVORITE,
    payload: { friendId }
});

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const removeFavorite = (friendId) => ({
    type: REMOVE_FAVORITE,
    payload: { friendId }
});
