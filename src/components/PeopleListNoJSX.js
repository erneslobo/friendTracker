import React from "react";
import { useHistory } from "react-router-dom";
import { PersonCard } from "./PersonCard";
import styles from "./PeopleList.module.css";
import { NewFriendCard } from "./NewFriendCard";

const PeopleListNoJSX = ({
    people,
    onClickPerson = () => { },
    personActionName,
    onPersonAction,
    allowAditions }) => {

    const history = useHistory();

    return React.createElement('div', { className: styles.peopleList }, [
        ...people.map(person =>
            React.createElement('div', { className: styles.peopleListItem }, [
                React.createElement(
                    PersonCard,
                    {
                        'key': person.id,
                        person,
                        onCardClicked: onClickPerson,
                        actionName: personActionName,
                        onAction: onPersonAction
                    }
                )
            ])),
        ...(allowAditions ? React.createElement('div', { className: styles.peopleListItem }, [
            React.createElement(NewFriendCard, { onClick: () => history.push('/new-friend') })
        ]) : [])
    ])
}

export { PeopleListNoJSX };
