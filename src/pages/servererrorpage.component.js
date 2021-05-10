import React from 'react';

const ServerErrorPage = () => {
    return (
        <>
            <div className="page-404">
                <div className="outer">
                    <div className="middle">
                        <div className="inner">
                            <div className="inner-circle"><i className="fa fa-cogs"></i><span>500</span></div>
                            <span className="inner-status">Opps! Internal Server Error!</span>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default ServerErrorPage;