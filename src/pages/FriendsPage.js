import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { myProfileData } from "../data"
import { FavoritesContext } from '../context/FavoritesContext';
import { FriendsContext } from '../context/FriendsContext';
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from "../components/WelcomeMessage";
import styles from "./FriendsPage.module.css"

const FriendsPage = () => {
    const { favoriteIds, toggleFavorite } = useContext(FavoritesContext);
    const { friends } = useContext(FriendsContext);
    const history = useHistory();

    const favorites = favoriteIds.map(id =>
        friends.find(friend => friend.id === id));

    const nonFavorites = friends.filter(
        friend => !favoriteIds.find(id => friend.id === id));

    const goToPersonDetail = personId => {
        history.push(`/friends/${personId}`);
    }

    return (
        <>
            <WelcomeMessage name={myProfileData.name} />
            <p>You have {favoriteIds.length} {favoriteIds.length === 1 ? 'favorite' : 'favorites'}</p>
            <h2 className={styles.contentHeading}>Favorites</h2>
            <PeopleList
                people={favorites}
                onClickPerson={goToPersonDetail}
                personActionName="Remove from Favorites"
                onPersonAction={toggleFavorite} />
            <h2 className={styles.contentHeading}>My Friends</h2>
            <PeopleList
                people={nonFavorites}
                onClickPerson={goToPersonDetail}
                personActionName="Add to Favorites"
                onPersonAction={toggleFavorite}
                allowAditions />

        </>
    )
}

export { FriendsPage }