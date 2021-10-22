import { createStore, combineReducers } from "redux";
import { favoritesReducer } from "./reducers/favorites";
import { friendsReducer } from "./reducers/friends";
import { profileReducer } from "./reducers/profile";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    friends: friendsReducer,
    profile: profileReducer
});

export const store = createStore(rootReducer);