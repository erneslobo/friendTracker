import { Tag } from './Tag'
import PropTypes from "prop-types"
import styles from './ProfileInfo.module.css'

const ProfileInfo = ({
    person: { profileURL, name, age, bio, birthday, interests },
    actions = [] }) => {

    return (
        <>
            <div className={styles.profilePicContainer}>
                <div className={styles.profilePicWrap}>
                    <img className={styles.profilePic} src={profileURL} alt="" />
                </div>
            </div>
            <h3 className={styles.detailHeading}>Name</h3>
            <p>{name}</p>
            <h3 className={styles.detailHeading}>Age</h3>
            <p>{age}</p>
            <h3 className={styles.detailHeading}>Bio</h3>
            <p>{bio}</p>
            <h3 className={styles.detailHeading}>Birthday</h3>
            <p>{birthday}</p>
            <h3 className={styles.detailHeading}>Interests</h3>
            {interests.map((interest, index) => <Tag key={interest} text={interest} />)}
            {actions.map(action => (
                <button
                    key={action.actionName}
                    className={styles.actionButton}
                    onClick={action.handler}>{action.actionName}</button>))}
        </>
    );
}

ProfileInfo.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profileURL: PropTypes.string,
        age: PropTypes.number,
        bio: PropTypes.string,
        birthday: PropTypes.string.isRequired,
        interests: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    action: PropTypes.arrayOf(
        PropTypes.shape({
            actionName: PropTypes.string.isRequired,
            handler: PropTypes.func.isRequired
        })
    )
}

export { ProfileInfo };