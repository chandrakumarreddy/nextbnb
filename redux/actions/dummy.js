import { API } from './types';

export const dummy = (value) => ({
    type: API,
    payload: {
        url: `https://jsonplaceholder.typicode.com/todos/${value}`,
        method: 'GET',
        onSuccess: (data) => ({
            type: 'DUMMY_SUCCESS',
            payload: data
        }),
        onFailure: (err) => ({
            type: 'DUMMY_FAILURE',
            payload: err
        }),
        label: 'FETCH_TODO'
    }
});
