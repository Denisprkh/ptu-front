import React, {Component} from 'react';
import {render} from "@testing-library/react";
import axios from "axios";
import NonAuthorizedButtons from "./NonAuthorizedButtons";

export default class Header extends Component{

        state = { user : {}}

        render() {

                return <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                                <ul className="navbar-nav">
                                        <li className="nav-item">
                                                <a className="nav-link" href="#" tabIndex="-1"
                                                   aria-disabled="true">ЭВМ и МП {this.state.user.login}</a>
                                        </li>
                                </ul>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <NonAuthorizedButtons/>
                        </div>
                </nav>
        }
};

