export default (state = {
    localTime: new Date().toLocaleString('chinese', {hour12: false})
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