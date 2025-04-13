import {createStore} from 'redux';


const INITIAL_VALUE ={
    counter:0,
}

const counterReducer=(store=INITIAL_VALUE,action)=>{

    console.log(store.counter);
    switch(action.type)
    {
        case "INCRIMENT":
        return {counter: store.counter + 1};
        case "DECRIMENT":
            return {counter: store.counter - 1};
        default:
            return store;
    }
}

const counterStore=createStore(counterReducer);

export default counterStore;
