import React, {Component} from 'react';

const AuthorizedButtons = () => {

    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="">Выход</a>
                </li>
            </ul>
        </div>
    )
}

export default AuthorizedButtons;