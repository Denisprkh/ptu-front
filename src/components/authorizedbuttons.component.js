import React from 'react';

const AuthorizedButtons = ({onLogout}) => (
    <>
        <div className="account-logo">
            <div className="nav-item mr-100">
                <i className="fa fa-user-circle fa-2x" aria-hidden="true"/>
            </div>
        </div>

        <ul className="navbar-nav p-0">
            <li className="nav-item">
                <button className="btn btn-light border border-dark " onClick={onLogout}>Выход</button>
            </li>
        </ul>
    </>
)

export default AuthorizedButtons;