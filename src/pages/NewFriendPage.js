import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { PersonInfoForm } from "../components/PersonInfoForm";
import { FriendsContext } from "../context/FriendsContext";


const NewFriendPage = () => {
    const { addFriend } = useContext(FriendsContext);
    const history = useHistory();

    const onFormSubmit = friendInfo => {
        const newFriend = {
            ...friendInfo,
            id: uuid(),
        }
        addFriend(newFriend);
        history.push("/");
    }


    return (
        <>
            <h1>Add A New Friend</h1>
            <PersonInfoForm
                onSubmit={onFormSubmit}
                buttonText="Create" />
        </>
    )
}

export { NewFriendPage }
