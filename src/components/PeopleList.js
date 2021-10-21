import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { PersonCard } from "./PersonCard";
import { NewFriendCard } from "./NewFriendCard";
import styles from "./PeopleList.module.css"


const PeopleList = ({
    people,
    onClickPerson = () => { },
    personActionName,
    onPersonAction,
    allowAditions }) => {

    const history = useHistory();

    return (
        <div className={styles.peopleList}>
            {people.map(person => (
                <div key={person.id} className={styles.peopleListItem}>
                    <PersonCard
                        person={person}
                        onCardClick={onClickPerson}
                        actionName={personActionName}
                        onAction={onPersonAction} />
                </div>
            ))}
            {allowAditions && <div className={styles.peopleListItem}>
                <NewFriendCard onClick={() => history.push('/new-friend')} />
            </div>}
        </div>
    )
}

PeopleList.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            profileURL: PropTypes.string,
            age: PropTypes.number
        })
    ).isRequired,
    onClickPerson: PropTypes.func,
    personActionName: PropTypes.string,
    onPersonAction: PropTypes.func,
    allowAditions: PropTypes.bool
}


export { PeopleList }