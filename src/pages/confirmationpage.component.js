import React from 'react';
import ConfirmationForm from "../components/confirmreg.component";

const ConfirmationPage = () => {
    return (
        <>
            <div className="confirm-form">
                <p className="lead text-muted confirm-form-text">Вы успешно зарегистрировались. Остался один шаг - подтвердить регистрацию.
                    Код для подтверждения выслан на вашу почту</p>
                <ConfirmationForm/>
            </div>
            </>
    )
}

export default ConfirmationPage;