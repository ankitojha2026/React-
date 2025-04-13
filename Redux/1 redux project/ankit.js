const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
};

const reducer = (store = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: store.counter + 1 };

        case 'DECREMENT':
            return { counter: store.counter - 1 };
        default:
            return store;
    }
};

const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
};

store.subscribe(subscriber);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
