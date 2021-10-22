import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../actions/favorites';
import { myProfileData } from "../data"
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from "../components/WelcomeMessage";
import styles from "./FriendsPage.module.css"

const FriendsPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites.map(id =>
        state.friends.find(friend => friend.id === id)));

    const nonFavorites = useSelector(state => state.friends.filter(friend =>
        !state.favorites.find(id => friend.id === id)));

    const goToPersonDetail = personId => {
        history.push(`/friends/${personId}`);
    }

    return (
        <>
            <WelcomeMessage name={myProfileData.name} />
            <p>You have {favorites.length} {favorites.length === 1 ? 'favorite' : 'favorites'}</p>
            <h2 className={styles.contentHeading}>Favorites</h2>
            <PeopleList
                people={favorites}
                onClickPerson={goToPersonDetail}
                personActionName="Remove from Favorites"
                onPersonAction={id => dispatch(removeFavorite(id))} />
            <h2 className={styles.contentHeading}>My Friends</h2>
            <PeopleList
                people={nonFavorites}
                onClickPerson={goToPersonDetail}
                personActionName="Add to Favorites"
                onPersonAction={id => dispatch(addFavorite(id))}
                allowAditions />

        </>
    )
}

export { FriendsPage }