import { API_START, API_END } from './types';

export const apiStart = (label) => ({
    type: API_START,
    payload: label
});

export const apiEnd = (label) => ({
    type: API_END,
    payload: label
});
