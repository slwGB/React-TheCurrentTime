export default (state = {
    localTime: null
}, action) => {
    switch (action.type) {
        case 'LOCAL_TIME':
            return Object.assign({}, state, {
                localTime: action.realTimeStr
            })
        default:
            return state
    }
}