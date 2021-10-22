import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { PersonInfoForm } from "../components/PersonInfoForm";
import { editFriend } from "../actions/friends"

const EditFriendPage = () => {
    const { friendId } = useParams();
    const friends = useSelector(state => state.friends);
    const selectedFriend = friends.find(f => f.id === friendId);
    const history = useHistory();
    const dispatch = useDispatch();

    const saveUpdatedInformation = updatedInfo => {
        dispatch(editFriend(friendId, updatedInfo))
        history.push("/");
    }

    return (
        <>
            <h1>Edit Info</h1>
            <PersonInfoForm
                person={selectedFriend}
                onSubmit={saveUpdatedInformation}
                buttonText="Save Changes" />
        </>
    )
}

export { EditFriendPage }
