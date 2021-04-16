import React from 'react';
import {Link} from "react-router-dom";

const TestCard = ({testData}) => {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{testData.name}</h5>
                            <p className="card-text">Время на прохождение теста: {testData.timeToPass}</p>
                            <a href="#" className="btn btn-primary">Пройти</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestCard;