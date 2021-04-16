import React, {useState} from 'react';
import {confirmRegistration} from "../redux/actions/authActionCreators";
import {connect} from "react-redux";
import {useHistory} from "react-router";


const ConfirmationForm = ({dispatchConfirmRegistrationAction}) => {

    const [token, setToken] = useState('');
    const history = useHistory();

    const handleOnSubmit = (event) => {
        dispatchConfirmRegistrationAction(token, () => {
                let redirectTo = "/login";
                history.push(redirectTo);
            },
            () => console.log("error"))
        event.preventDefault();

    }

    return (
        <React.Fragment>
            <main className="form-confirm">
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="confirmCode">Код подтверждения регистрации</label>
                        <input type="text" className="form-control mt-2 mb-2" placeholder="Код подтверждения"
                               name="login" value={token} onChange={(e) => setToken(e.target.value)}
                        />
                    </div>

                    <button className="w-100 btn btn-lg btn-primary">Подтвердить</button>
                </form>
            </main>

        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchConfirmRegistrationAction : (token, onSuccess, onError) =>
        dispatch(confirmRegistration({token}, onSuccess, onError))
})

export default connect(null, mapDispatchToProps)(ConfirmationForm);