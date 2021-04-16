import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import TestList from "../components/testslist.component";
import {connect} from "react-redux";
import {fetchAllTests} from "../redux/actions/testActionCreators";

const AllTestsPage = ({ tests , dispatchFetchAllTestsAction, totalPages, currentPage}) => {

    const[page, setPage] = useState(currentPage);
    useEffect(() => dispatchFetchAllTestsAction(page), [dispatchFetchAllTestsAction, page]);
    const handlePageChange = (actionNumber) => {

        setPage(page + actionNumber)
    }

    return (
        <>
        <div className="row my-5">
            <div className="col-10">
                <h2>Все тесты</h2>
                <Link to="/profile" className="text-dark">
                    <i className="fas fa-arrow-left cursor-pointer"/></Link>
            </div>
            <div className="col-2">
                <Link to="/edit-test" className="btn btn-primary  ">
                    Создать тест | <i className="fas fa-plus"/>
                </Link>
            </div>
        </div>
        <hr className="light"/>
            <div className="row mt-5">
                <div className="col-12">
                    {
                        tests.length > 0 ? <TestList testList={tests}/> :
                            <>
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
    )
}

const mapStateToProps = state => ({
    tests: state.test.testList,
    totalPages: state.test.totalPages,
    currentPage : state.test.currentPage
});

const mapDispatchToProps = dispatch => ({
    dispatchFetchAllTestsAction : (page) =>
        dispatch(fetchAllTests(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTestsPage);