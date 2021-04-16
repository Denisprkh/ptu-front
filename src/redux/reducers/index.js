import {combineReducers} from "redux";
import user from './userReducer';
import loading from "./loadingReducer";
import  groups from "./groupReducer"
import users from  "./allUsersReducer"
import error from "./errorReducer";
import test from "./testReducer";
import editTest from  "./editTestReducer"

const  rootReducer = combineReducers({user, loading, groups, users, error, test, editTest})

export default rootReducer;