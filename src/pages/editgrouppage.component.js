import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createGroup} from "../redux/actions/groupsActionCreators";
import {Link} from "react-router-dom";

const EditGroupPage = ({history, dispatchCreateGroupAction }) => {

    const[number, setNumber] = useState('');

    const handleOnSubmit = event => {
        event.preventDefault();
        const data = {number};
        dispatchCreateGroupAction(data, () => {
            history.push('/groups');
        })
    }

    return (
        <>
        <div className="rov">
            <div className="col">
                <h2>Изменить группу</h2>
                <Link to="/profile" className="text-dark">
                    <i className="fas fa-arrow-left cursor-pointer" /></Link>
            </div>
            <div className="col-9 mt-5">
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="number">Номер группы</label>
                        <input type="text" name="number" placeholder="Номер группы" value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="form-control mt-2 mb-2"/>
                    </div>
                    <button type="submit" className="btn btn-primary mr2 ">
                        Сохранить | <i className="fas fa-save"/>
                    </button>
                </form>
            </div>
        </div>
            </>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchCreateGroupAction: (data, onSuccess, onError) =>
        dispatch(createGroup(data, onSuccess, onError))
});

export default connect(null, mapDispatchToProps)(EditGroupPage);
