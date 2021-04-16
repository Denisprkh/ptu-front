import * as constants from './../constants';
import ConfirmationPage from "../../pages/confirmationpage.component";

export const registerUser = (data, onSuccess) => ({
   type: constants.API,
   payload: {
       method: 'POST',
       url: 'users/signUp',
       data,
       postProcessSuccess: onSuccess
   }
});

export const confirmRegistration = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `users/signUp/confirm?token=${data.token}`,
        getProcessSuccess: onSuccess,
        getProcessError: onError
    }
});

export const loginUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: 'users/signIn',
        data,
        success: (response) => (setUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

const setUserInfo = (data) => {
    const parsedToken = data.jwt;
    const userData = data.userDto;
    const userInfo = {
        id: userData.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        login: userData.login,
        roleId: userData.roleId,
        token: parsedToken,
        isLoggedIn: true
    };
    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    return {type: constants.SET_USER_INFO, payload: userInfo};
}

export const logoutUser = () => {
    localStorage.removeItem('USER_INFO');
    return{ type: constants.RESET_USER_INFO}
}