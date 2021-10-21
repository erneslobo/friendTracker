import { useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom"
import { FavoritesContext } from "../context/FavoritesContext";
import { FriendsContext } from "../context/FriendsContext";
import { ProfileInfo } from "../components/ProfileInfo";

const FriendDetailPage = () => {
    const history = useHistory();
    const { favoriteIds, toggleFavorite } = useContext(FavoritesContext);
    const { friends } = useContext(FriendsContext);
    const { friendId } = useParams();
    const selectedFriend = friends.find(friend => friend.id === friendId);
    const isFavorite = favoriteIds.includes(friendId);
    const pageActions = [{
        actionName: isFavorite ? 'Remove from Favorites' : "Add to Favorites",
        handler: () => toggleFavorite(friendId)
    }, {
        actionName: 'Edit info',
        handler: () => history.push(`/edit/${friendId}`)
    }]

    return selectedFriend ? (
        <ProfileInfo
            person={selectedFriend}
            actions={pageActions} />
    ) : (
        <>
            <p>Oops! Couldn't find that friend</p>
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </>
    )
}

export { FriendDetailPage }