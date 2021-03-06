


const deviceIdReducer = (state = {
    deviceId: ''
}, action) => {
    switch (action.type) {
        case "GET_DEVICE_ID":
            state = {
                ...state,
                deviceId: action.payload,
            }
            break;
        default:
            return state;
    }
    return state
}

export default deviceIdReducer;