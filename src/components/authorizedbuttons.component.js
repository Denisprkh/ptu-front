import React from 'react';
import {Link, NavLink} from "react-router-dom";

const AuthorizedButtons = ({onLogout}) => (
    <>
        <div className="account-logo ms-auto">
            <NavLink to="/profile" className="nav-item text-dark">
                <i className="fa fa-user-circle fa-2x "/>
            </NavLink>
        </div>

        <ul className="navbar-nav btn-logout">
            <li className="nav-item">
                <button className="btn btn-light border border-dark " onClick={onLogout}>Выход</button>
            </li>
        </ul>
    </>
)

export default AuthorizedButtons;