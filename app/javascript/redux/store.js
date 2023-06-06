import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';


const initialState = {
    greeting: '',
};

const SET_GREETING = 'SET_GREETING';

export const setGreeting = (greeting) => ({
    type: SET_GREETING,
    greeting,
});

export const getRandomGreeting = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get('/api/greeting');
            const randomGreeting = response.data.greeting;
            dispatch(setGreeting(randomGreeting));
        }catch(error){
            console.error('Error fetching random greeting:', error);
        }
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_GREETING:
            return {...state, greeting: action.greeting};
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;