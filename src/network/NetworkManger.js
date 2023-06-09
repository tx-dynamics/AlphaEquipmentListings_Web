import { BASE_URL } from './Environment'
import { DeviceUUID } from 'device-uuid';
import { store } from '../redux/store';
import { accessToken } from '../redux/Slices/userDataSlice';

export const AUTHORIZE = 'AUTHORIZE'
export const NETWORK_ERROR = 'NETWORK ERROR'

export const Method = {
    "GET": 'GET',
    "POST": 'POST',
    "PUT": 'PUT',
    "DELETE": 'DELETE',
    "PATCH": 'PATCH',
}

export const Status = {
    "SUCCESS": 200,
    "ERROR": 400,
    "AUTHENTICATION_FAIL": 401,
    "NOT_FOUND": 400,
}

var defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export const callApi = async (
    method,
    endPoint,
    bodyParams,
    onSuccess,
    onError,
    multipart,
) => {

    let token = store.getState().userData.accessToken ?? false;
    let refreshToken = store.getState().userData.refreshToken ?? false;
    let url = BASE_URL + endPoint
    let deviceId = localStorage.getItem('deviceId')
    if (!deviceId) {
        let id = new DeviceUUID().get()
        localStorage.setItem('deviceId', id)
        deviceId = id
    }


    if (multipart) {
        defaultHeaders['Content-Type'] = 'multipart/form-data';
    } else {
        defaultHeaders['Content-Type'] = 'application/json';
    }
    if (token) {
        defaultHeaders['Authorization'] = token;
    }
    let fetchObject = {
        method: method,
        headers: defaultHeaders,
        body:
            method === 'GET'
                ? null
                : method === 'DELETE'
                    ? null
                    : multipart
                        ? bodyParams
                        : JSON.stringify(bodyParams),
    };
    if (bodyParams === null) {
        delete fetchObject.body;
    }
    try {
        let response = await fetch(url, fetchObject);
        let responseJson = await response.json();
        if (responseJson?.message === 'jwt expired') {
            let fetchObject = {
                method: 'POST',
                headers: defaultHeaders,
                body: JSON.stringify({
                    device: {
                        id: deviceId
                    },
                }),
            };
            console.log('11111111111');
            await fetch(`${BASE_URL}user/refresh/${refreshToken}`, fetchObject)
                .then(async res => {
                    let resJson = await res.json();
                    console.log(resJson, '22222222222');

                    store.dispatch(accessToken(resJson.data.accessToken));
                    callApi(
                        method,
                        endPoint,
                        bodyParams,
                        onSuccess,
                        onError,
                    );
                })
                .catch(err => console.log('error refresh token=> ', err));
        } else if (responseJson?.status < 400) {
            onSuccess(responseJson);
        } else {
            onError(responseJson);
        }
    } catch (error) {
        onError(error);
    }

};


