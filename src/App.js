import { BrowserRouter, Route } from 'react-router-dom';
import { EditFriendPage } from "./pages/EditFriendPage";
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { NewFriendPage } from './pages/NewFriendPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { FavoritesProvider } from './components/FavoritesProvider'
import { FriendsProvider } from './components/FriendsProvider';
import { NavBar } from './components/NavBar';
import styles from './App.module.css';

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <FavoritesProvider>
                <FriendsProvider>
                    <div className={styles.contentContainer}>
                        <Route path="/" exact>
                            <FriendsPage>
                                <h1>Hello!</h1>
                            </FriendsPage>
                        </Route>
                        <Route path="/friends/:friendId">
                            <FriendDetailPage />
                        </Route>
                        <Route path="/edit/:friendId">
                            <EditFriendPage />
                        </Route>
                        <Route path="/user-profile">
                            <UserProfilePage />
                        </Route>
                        <Route path="/new-friend">
                            <NewFriendPage />
                        </Route>
                    </div>
                </FriendsProvider>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

