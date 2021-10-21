import { useState } from "react";
import PropTypes from "prop-types"
import styles from "./PersonInfoForm.module.css"

const PersonInfoForm = ({ person = {}, onSubmit = () => { }, buttonText = "Submit" }) => {
    const [name, setName] = useState(person.name || "");
    const [age, setAge] = useState(person.age || "");
    const [profilePicUrl, setProfilePicUrl] = useState(person.profilePicUrl || "");
    const [bio, setBio] = useState(person.bio || "");
    const [birthday, setBirthday] = useState(person.birthday || "");
    const [interests, setInterests] = useState((person.interests && person.interests.join(", ")) || "");

    const onCreateClicked = () => {
        const newFriend = {
            name,
            age,
            profilePicUrl,
            bio,
            birthday,
            interests: interests.split(',').map(str => str.trim())
        }

        onSubmit(newFriend);
    }

    return (
        <>
            <div className={styles.infoForm}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    value={name}
                    onChange={e => { setName(e.target.value) }} />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    placeholder="Age"
                    type="number"
                    value={age}
                    onChange={e => { setAge(Number(e.target.value)) }} />
                <label htmlFor="profile-pic-url">Profile Picture Url</label>
                <input
                    id="profile-pic-url"
                    placeholder="https://...."
                    type="text"
                    value={profilePicUrl}
                    onChange={e => { setProfilePicUrl(e.target.value) }} />
                <label htmlFor="bio">Bio</label>
                <textarea
                    id="bio"
                    placeholder="Tell us something about this friend..."
                    value={bio}
                    onChange={e => { setBio(e.target.value) }} />
                <label htmlFor="birthday">Birthday</label>
                <input
                    id="birthday"
                    placeholder="i.e January 1"
                    type="text"
                    value={birthday}
                    onChange={e => { setBirthday(e.target.value) }} />
                <label htmlFor="interests">Interests (separate with commas)</label>
                <input
                    id="interests"
                    placeholder="Food, movies, travel, ..."
                    type="text"
                    value={interests}
                    onChange={e => { setInterests(e.target.value) }} />
                <button onClick={onCreateClicked}>{buttonText}</button>
            </div>
        </>
    )
}

PersonInfoForm.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        profileURL: PropTypes.string,
        age: PropTypes.number,
        bio: PropTypes.string,
        birthday: PropTypes.string,
        interests: PropTypes.arrayOf(PropTypes.string)
    }),
    onSubmit: PropTypes.func,
    buttonText: PropTypes.string
}

export { PersonInfoForm };