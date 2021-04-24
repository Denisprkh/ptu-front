import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthPage from "./pages/authpage.component";
import GroupsPage from "./pages/groupspage.component";
import Header from "./components/header.component";
import { connect } from "react-redux";
import Spinner from "./components/spinner/spinner.component";
import { logoutUser } from "./redux/actions/authActionCreators";
import ConfirmationPage from "./pages/confirmationpage.component";
import LoginPage from "./pages/loginpage.component";
import ServerErrorPage from "./pages/servererrorpage.component";
import EditGroupPage from "./pages/editgrouppage.component";
import ProfilePage from "./pages/profilepage.component";
import AllUsersPage from "./pages/alluserspage.component";
import AllTestsPage from "./pages/alltestspage.component";
import EditTestPage from "./pages/edittestpage.component";
import Posts from "./pages/posts";
import AddPostPage from "./pages/addPostPage";

const App = ({ user, dispatchLogoutAction }) => {
  return (
    <>
      <Spinner />
      <Header isLoggedIn={user.isLoggedIn} onLogout={dispatchLogoutAction} />
      <div className="container my-5">
        {user.isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={AuthPage} />
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/confirmation" component={ConfirmationPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/all-users" component={AllUsersPage} />
            <Route exact path="/groups" component={GroupsPage} />
            <Route exact path="/tests" component={AllTestsPage} />
            <Route exact path="/edit-group" component={EditGroupPage} />
            <Route exact path="/edit-test" component={EditTestPage} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/add-post" component={AddPostPage} />
          </Switch>
        )}
        <Switch>
          <Route exact path="/serverError" component={ServerErrorPage} />
        </Switch>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction: () => dispatch(logoutUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
