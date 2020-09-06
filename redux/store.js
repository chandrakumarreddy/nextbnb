import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
// import callApiMiddleware from './middlewares/callApiMiddleware';

const middlewares = applyMiddleware(thunkMiddleware);

const composedMiddleware =
    process.env.NODE_ENV === 'production' ? middlewares : composeWithDevTools(middlewares);

let store;

function initStore(initialState) {
    return createStore(reducers, initialState, composedMiddleware);
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        });
        store = undefined;
    }

    if (typeof window === 'undefined') return _store;

    if (!store) store = _store;

    return store;
};

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}
