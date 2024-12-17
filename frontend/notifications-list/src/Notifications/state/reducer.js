import { ACTION_TYPES } from "./actionTypes";

const reducer = (state, action) => {
    console.log("Current state: ", state, ' dispatched actions-> ', action.type);
    switch(action.type){
        case ACTION_TYPES.ADD_NOTIFICATION: {
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            };
        }

        case ACTION_TYPES.REMOVE_NOTIFICATION: {
            console.log('removing payload with id: ->',action.payload.id)
            return {
                ...state,
                notifications: state.notifications.filter(notification => notification?.id !== action.payload?.id)
            }
        }

        default:
            return state
    }

}

export default reducer;