import React from 'react';

const GroupList = ( { groups }) => {
    return (
        <React.Fragment>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Номер группы</th>
                </tr>
                </thead>
                <tbody>
                {
                    groups.map(item => (
                        <>
                        <tr key = {item.id}>
                            <td>{item.number}</td>
                        </tr>
                        </>
                    ))
                }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default GroupList;