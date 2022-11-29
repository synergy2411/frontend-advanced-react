import * as fromActions from '../actions/actions';

const initialState = {
    counter: 0,
    result: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case fromActions.DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case fromActions.ADD_COUNTER: {
            return {
                ...state,
                counter: state.counter + action.value
            }
        }
        case fromActions.SUB_COUNTER: {
            return {
                ...state,
                counter: state.counter - action.value
            }
        }
        case fromActions.STORE_RESULT: {
            return {
                ...state,
                result: [state.counter, ...state.result]
            }
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;