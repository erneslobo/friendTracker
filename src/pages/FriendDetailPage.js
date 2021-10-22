import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom"
import { ProfileInfo } from "../components/ProfileInfo";
import { addFavorite, removeFavorite } from "../actions/favorites"

const FriendDetailPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { friendId } = useParams();

    const selectedFriend = useSelector(state => state.friends.find(friend => friend.id === friendId));
    const isFavorite = useSelector(state => state.favorites.includes(friendId));

    const toggleFavorite = friendId => {
        if (isFavorite) {
            dispatch(removeFavorite(friendId));
        } else {
            dispatch(addFavorite(friendId));
        }
    }

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