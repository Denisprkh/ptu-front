import React, {Component} from 'react';
import { Link} from "react-router-dom";
import AuthorizedButtons from "./authorizedbuttons.component.js";

const Header = ({isLoggedIn, onLogout}) => (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light py-3 w-100'>
        <div className="container">
                <Link className="navbar-brand" to="/">
                    <i className="fa fa-laptop fa-2x" aria-hidden="true"/>
                    <span className="h3 p-3">ЭВМ и МП</span>
                </Link>
            {
                isLoggedIn &&
                <AuthorizedButtons onLogout={onLogout}/>
            }
        </div>
    </nav>
        </>
);

export default Header;



