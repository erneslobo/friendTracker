import PropTypes from "prop-types"
import styles from "./NewFriendCard.module.css"

const NewFriendCard = ({ onClick = () => { } }) => {
    return (
        <div onClick={onClick} className={styles.cardContainer}>
            <h3>+ Add New Friend</h3>
        </div>
    );
}

NewFriendCard.propTypes = {
    onClick: PropTypes.func
}

export { NewFriendCard };