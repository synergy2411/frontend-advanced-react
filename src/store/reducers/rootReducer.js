import * as fromActions from '../actions/actions';

const initialState = {
    counter: 0,
    result: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.INCREMENT: {
            return {
                counter: state.counter + 1
            }
        }
        case fromActions.DECREMENT: {
            return {
                counter: state.counter - 1
            }
        }
        case fromActions.ADD_COUNTER: {
            return {
                counter: state.counter + action.value
            }
        }
        case fromActions.SUB_COUNTER: {
            return {
                counter: state.counter - action.value
            }
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;