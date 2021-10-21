import { useState, useEffect } from "react";
import { FriendsContext } from "../context/FriendsContext";
import { friendsData as starterFriends } from "../data"

const FriendsProvider = ({ children }) => {
    const existingState = JSON.parse(localStorage.getItem("friends"));
    const [friends, setFriends] = useState(existingState || starterFriends);

    useEffect(() => {
        localStorage.setItem("friends", JSON.stringify(friends));
    }, [friends])

    const addFriend = friend => {
        const newFriends = [...friends, friend];
        setFriends(newFriends);
    }

    const updateFriend = updatedInfo => {
        const updatedFriends = friends.map(friend => {
            if (friend.id === updatedInfo.id) {
                return updatedInfo;
            }

            return friend;
        });

        setFriends(updatedFriends);
    }

    return (
        <FriendsContext.Provider value={{ friends, addFriend, updateFriend }}>
            {children}
        </FriendsContext.Provider>
    );

}

export { FriendsProvider }