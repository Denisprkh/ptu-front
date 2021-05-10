import React from 'react';
import {useHistory} from "react-router";
import Timer from "../components/timer";

const ProfilePage = () => {

    const history = useHistory();

    const handleAllUsersClick = (event) =>{
        event.preventDefault();
        history.push('/all-users');
    }

    const handleAllGroupsClick = (event) => {
        event.preventDefault();
        history.push('/groups');
    }

    const handleAllTestsClick = (event) => {
        event.preventDefault();
        history.push('/tests');
    }

    return (
        <>
        <div className="col-3">
        <ul className="list-group">
            <li className="list-group-item cursor-pointer" onClick={handleAllUsersClick}>Все пользователи</li>
            <li className="list-group-item cursor-pointer" onClick={handleAllGroupsClick}>Все группы</li>
            <li className="list-group-item cursor-pointer" onClick={handleAllTestsClick}>Тесты</li>
        </ul>
        </div>
            </>
    )
}

export default ProfilePage;