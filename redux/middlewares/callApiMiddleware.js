import fetch from 'fetch';
import { API } from '../actions/types';
import { apiStart } from '../actions/api';

function checkStatus(res) {
    if (res.ok) return res;
    const error = new Error(res.statusText);
    error.response = res;
    return Promise.reject(error);
}

export default function callApiMiddleware({ dispatch }) {
    return (next) => (action) => {
        if (action.type !== API) return next(action);
        const { url, method, data, onSuccess, onFailure, label } = action.payload;
        const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
        if (label) {
            dispatch(apiStart(`${label}_REQUEST`));
        }
        const headers = {
            authorization: `Bearer `,
            'Content-Type': 'application/json'
        };
        return fetch(url, {
            method,
            body: JSON.stringify(data),
            headers,
            credentials: 'same-origin'
        })
            .then(checkStatus)
            .then();
    };
}
