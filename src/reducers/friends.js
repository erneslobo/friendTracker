import {
    ADD_FRIEND,
    EDIT_FRIEND
} from '../actions/friends';
import { friendsData } from '../data';

export const friendsReducer = (state = friendsData, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_FRIEND: {
            const { newFriendInfo } = payload;
            return [newFriendInfo, ...state];
        }
        case EDIT_FRIEND: {
            const { friendId, updates } = payload;
            return state.map(friend => {
                if (friend.id === friendId) {
                    return { ...friend, ...updates };
                }

                return friend;
            })
        }
        default:
            return state;
    }
}