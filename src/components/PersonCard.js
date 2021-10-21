import PropTypes from "prop-types";
import styles from "./PersonCard.module.css";

const PersonCard = ({
    person: { id, profileURL, name, age },
    onCardClick,
    actionName,
    onAction }) => {

    return (
        <div
            className={styles.card}
            onClick={() => onCardClick(id)}>
            <div className={styles.detailsContainer}>
                <div className={styles.profilePicLeft}>
                    <div className={styles.profilePicWrap}>
                        <img className={styles.profilePic} src={profileURL} alt="" />
                    </div>
                </div>
                <div className={styles.cardDetails}>
                    <h3>Name</h3>
                    <p>{name}</p>
                    <h3>Age</h3>
                    <p>{age}</p>
                </div>
            </div>
            {actionName && onAction && (<button
                onClick={e => {
                    onAction(id);
                    e.stopPropagation();
                }}
                className={styles.actionButton}>{actionName}</button>)}
        </div>
    )
}

PersonCard.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        profileURL: PropTypes.string,
        age: PropTypes.number
    }).isRequired,
    onCardClick: PropTypes.func,
    actionName: PropTypes.string,
    onAction: PropTypes.func
}

export { PersonCard };