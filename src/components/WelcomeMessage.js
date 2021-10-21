import { useState } from 'react'
import PropTypes from "prop-types"
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ name }) => {
    const hasBeenHidden = localStorage.getItem("welcomeMessageHidden");
    const [isVisible, setIsVisible] = useState(!hasBeenHidden);

    const hide = () => {
        setIsVisible(false);
        localStorage.setItem('welcomeMessageHidden', true);
    }

    return isVisible ? (
        <div className={styles.welcomeMessage}>
            <h2>Welcome to my Friend-Tracker app, {name}</h2>
            <button onClick={hide}>Hide</button>
        </div>
    ) : null;
}

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired
}
export { WelcomeMessage }



