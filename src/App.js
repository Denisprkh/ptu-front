import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import AuthPage from "./pages/authpage.component";
import GroupsPage from "./pages/groupspage.component";
import Header from "./components/header.component";
import {connect} from 'react-redux';
import Spinner from "./components/spinner/spinner.component";
import { logoutUser } from "./redux/actions/authActionCreators";

const App = ({user, dispatchLogoutAction}) => {
    return (
        <>
            <Spinner/>
            <Header isLoggedIn={user.isLoggedIn} onLogout={dispatchLogoutAction}/>
            <div className="container my-5">
            {!user.isLoggedIn ?
                (
                    <Switch>
                        <Route exact path="/auth" component={AuthPage} />
                        <Redirect to="/auth"/>
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path="/groups" component={GroupsPage}/>
                        <Redirect to="/groups"/>
                    </Switch>
                )
            }
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = (dispatch) => ({
    dispatchLogoutAction: () => dispatch(logoutUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);