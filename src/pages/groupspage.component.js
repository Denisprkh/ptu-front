import React, {useEffect, useState} from 'react';
import GroupList from "../components/groupList.component";
import {connect} from "react-redux";
import {fetchAllGroups} from "../redux/actions/groupsActionCreators";
import {Link, NavLink} from "react-router-dom";

const GroupsPage = ({groups, dispatchFetchAllGroupsAction, currentPage, totalPages}) => {


    const [page, setPage] = useState(currentPage);
    useEffect(() => dispatchFetchAllGroupsAction(page), [dispatchFetchAllGroupsAction, page]);
    const handlePageChange = (actionNumber) => {

        setPage(page + actionNumber)
    }
    return (
        <>
            <div className="row">
                <div className="col-10">
                    <h2>Все группы</h2>

                    <Link to="/profile" className="text-dark">
                        <i className="fas fa-arrow-left cursor-pointer"/></Link>


                </div>
                <div className="col-2">
                    <Link to="/edit-group" className="btn btn-primary  ">
                        Создать группу | <i className="fas fa-plus"/>
                    </Link>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    {
                        groups.length > 0 ? <GroupList groups={groups}/> :
                            <>
                                <hr className="light"/>
                                <div className="text-center mt-5">
                                    <h3><i className="far fa-folder-open fa-3x"/></h3>
                                    <h2 className="text-center">Ни одной группы не найдено</h2>
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
    groups: state.groups.groupList,
    totalPages: state.groups.totalPages,
    currentPage: state.groups.currentPage
});

const mapDispatchToProps = dispatch => ({
    dispatchFetchAllGroupsAction: (page) => dispatch(fetchAllGroups(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPage);