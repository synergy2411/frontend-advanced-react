export const INCREMENT = "[Counter] to increase counter by 1"
export const DECREMENT = "[Counter] to decrese counter by 1"
export const ADD_COUNTER = "[Counter] to add payload value"
export const SUB_COUNTER = "[Counter] to subtract the payload value"

// Action creator

export function onSubtractCounter(value) {
    return {
        type: SUB_COUNTER,
        value
    }
}

export function onAddCounter(value) {
    return {
        type: ADD_COUNTER,
        value
    }
}