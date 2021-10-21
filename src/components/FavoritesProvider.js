import { useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesProvider = ({ children }) => {
    const existingState = JSON.parse(localStorage.getItem("favoriteIds"));
    const [favoriteIds, setFavoriteIds] = useState(existingState || []);

    useEffect(() => {
        localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
    }, [favoriteIds])

    const toggleFavorite = personId => {
        let newFavoriteIds = favoriteIds.includes(personId)
            ? favoriteIds.filter(id => id !== personId)
            : favoriteIds.concat(personId);

        setFavoriteIds(newFavoriteIds);
    }

    return (
        <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );

}

export { FavoritesProvider }