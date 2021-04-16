import React, {useEffect, useState} from 'react';
import {banUser, fetchAllUsers, unBanUser} from "../redux/actions/allUsersActionCreators";
import {connect} from "react-redux";

const UserList = ( {users, dispatchBanUserAction, dispatchUnBanUserAction} ) => {

            const processBan = (userId) => {
                dispatchBanUserAction(userId);
            }

            const processUnBan = (userId) => {
                dispatchUnBanUserAction(userId);
            }
    console.log(users)
            return (
            <React.Fragment>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Логин</th>
                        <th scope="col">Заблокирован</th>
                        <th scope="col">Учитель</th>
                        <th scope="col">Админ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((item) => {return(
                            <>
                                <tr key = {item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.login}</td>
                                    <td>
                                        {
                                        item.locked === true ?
                                            <>
                                                <div onClick={() => {processUnBan(item.id)}}>
                                                    <i className="fas fa-check cursor-pointer" />
                                                </div>
                                            </>
                                            :
                                            <>
                                            <div onClick={() => {processBan(item.id)}}>
                                                <i className="fas fa-window-close cursor-pointer  " />
                                            </div>
                                            </>
                                    }
                                    </td>
                                    <td>
                                        {
                                            item.userRole.id === 3 ?
                                                <>
                                                    <div >
                                                        <i className="fas fa-check cursor-pointer" />
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div >
                                                        <i className="fas fa-window-close cursor-pointer  " />
                                                    </div>
                                                </>
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.userRole.id  === 2 ?
                                                <>
                                                    <div >
                                                        <i className="fas fa-check cursor-pointer" />
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div >
                                                        <i className="fas fa-window-close cursor-pointer  " />
                                                    </div>
                                                </>
                                        }
                                    </td>
                                </tr>
                            </>
                        )})
                    }
                    </tbody>
                </table>
            </React.Fragment>

    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchBanUserAction : (userId) =>
        dispatch(banUser(userId)),
    dispatchUnBanUserAction: (userId) =>
        dispatch(unBanUser(userId))
});

export default connect(null, mapDispatchToProps)(UserList);