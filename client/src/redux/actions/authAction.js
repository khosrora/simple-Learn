import { postDataAPI } from '../../helpers/ferchData';
import { GLOBALTYPES } from './globalTypes';
import { errorMessage, successMessage } from './../../components/utilities/Toastify';
import Cookies from 'js-cookie'


export const register = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: true } });
        const res = await postDataAPI("register", data);
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: false } });
    } catch (err) {
        console.log(err.message);
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: false } });
        errorMessage(err.response.data.message)
    }
}

export const activeAcc = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: true } });
        const res = await postDataAPI("sendActiveCode", data);
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: false } });
    } catch (err) {
        console.log(err.message);
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: false } });
        errorMessage(err.response.data.message)
    }
}

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: true } });
        const res = await postDataAPI("login", data);
        localStorage.setItem("firstLogin", true);
        Cookies.set('refreshtoken', res.data.access_token)
        successMessage(res.data.message);
        dispatch({
            type: GLOBALTYPES.USER, payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        });
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: false } });
    } catch (err) {
        console.log(err.message);
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: false } });
        errorMessage(err.response.data.message)
    }
}

export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: true } });
        try {
            const data = Cookies.get('refreshtoken');
            // ! create obj
            const objData = {
                refresh_token: data
            }
            const res = await postDataAPI('refreshToken', objData);
            dispatch({
                type: GLOBALTYPES.USER,
                payload: {
                    token: res.data.access_token,
                    user: res.data.user
                }
            })
            dispatch({ type: GLOBALTYPES.ALERT, payload: {} })
        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {
                    error: err.response.data.msg
                }
            })
        }
    }
}

export const codeChangePassword = (data) => async (dispatch) => {

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { laod: true } })
        const res = await postDataAPI('codeChangePassword', data);
        successMessage(res.data.message)
        dispatch({ type: GLOBALTYPES.ALERT, payload: {} })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
        errorMessage(err.response.data.message)
    }
}

export const changePassword = (data) => async (dispatch) => {

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { laod: true } })
        const res = await postDataAPI('changePassword', data);
        successMessage(res.data.message)
        dispatch({ type: GLOBALTYPES.ALERT, payload: {} })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
        errorMessage(err.response.data.message)
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { laod: true } });
        localStorage.removeItem("firstLogin");
        Cookies.remove("refreshtoken")
        dispatch({ type: GLOBALTYPES.USER, payload: {} });
        successMessage("شما از وب سایت خارج شدید");
        dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
        errorMessage(err.response.data.message)
    }
}