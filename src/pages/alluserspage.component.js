import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import UserList from "../components/usersList.component";
import {fetchAllUsers} from "../redux/actions/allUsersActionCreators";
import {Link} from "react-router-dom";

const AllUsersPage = ( { users , dispatchFetchAllUsersAction, totalPages, currentPage}) => {

    const[page, setPage] = useState( currentPage);
    const[shouldRerender, setShouldRerender] = useState(false);
    useEffect(() => dispatchFetchAllUsersAction(page), [dispatchFetchAllUsersAction, page]);
    const handlePageChange = (actionNumber) => {

        setPage(page + actionNumber)
    }

    const rerender = (isRerender) => {
        setShouldRerender(isRerender);
    }

    return (
        <>
            <div className="row my-5">
                <div className="col-10">
                    <h2>Все пользователи</h2>
                    <Link to="/profile" className="text-dark">
                        <i className="fas fa-arrow-left cursor-pointer" /></Link>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    {
                       users.length > 0 ? <UserList users={users} shouldRerender={rerender}/> :
                            <>
                                <hr className="light"/>
                                <div className="text-center mt-5">
                                    <h3><i className="far fa-folder-open fa-3x"/> </h3>
                                    <h2 className="text-center">Ни одного пользователя не найдено</h2>
                                </div>
                            </>
                    }
                </div>
            </div>
            { totalPages > 1 ?
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center bottom">
                        { page > 1 ?
                            <li className="page-item disabled cursor-pointer" onClick={() => handlePageChange(-1)}>
                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                            </li> : null
                        }
                        {totalPages >= page + 1 ?
                            <li className="page-item cursor-pointer"  onClick={() => handlePageChange( 1)}><a className="page-link" href="#">
                                {page + 1}
                            </a></li> : null
                        }
                        {totalPages >= page + 2 ?
                            <li className="page-item cursor-pointer" onClick={() => handlePageChange(  2)}><a className="page-link" href="#">
                                {page + 2}
                            </a></li> : null
                        }
                        {totalPages >= page + 3 ?
                            <li className="page-item cursor-pointer" onClick={() => handlePageChange(  3)}><a className="page-link" href="#">
                                {page + 3}
                            </a></li> : null
                        }
                    </ul>
                </nav> : null
            }

        </>
    );
}

const mapStateToProps = state => ({
    users: state.users.userList,
    totalPages: state.users.totalPages,
    currentPage : state.users.currentPage
});

const mapDispatchToProps = dispatch => ({
    dispatchFetchAllUsersAction : (page) =>
        dispatch(fetchAllUsers(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersPage);