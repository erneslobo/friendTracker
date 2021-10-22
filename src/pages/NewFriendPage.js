import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { PersonInfoForm } from "../components/PersonInfoForm";
import { addFriend } from "../actions/friends";


const NewFriendPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onFormSubmit = friendInfo => {
        const newFriend = {
            ...friendInfo,
            id: uuid(),
        }
        dispatch(addFriend(newFriend));
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
