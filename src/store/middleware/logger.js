
function logger(store) {
    return function (next) {
        return function (action) {
            console.log("[ACTION] ", action)
            console.log("[STATE] ", store.getState())
            // setTimeout(() => {
            return next(action);
            // }, 3000)
        }
    }
}

export default logger;

