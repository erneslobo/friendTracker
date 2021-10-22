import {
    UPDATE_PROFILE
} from '../actions/profile';

import { myProfileData } from '../data';

export const profileReducer = (state = myProfileData, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_PROFILE: {
            const { updates } = payload;
            return { ...state, ...updates };
        }
        default:
            return state;
    }
}