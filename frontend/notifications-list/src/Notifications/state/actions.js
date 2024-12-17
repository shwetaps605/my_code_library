import { ACTION_TYPES } from "./actionTypes";
import { v4 } from 'uuid';




export const addNotification = ({message, type}) => {
    return {
        type: ACTION_TYPES.ADD_NOTIFICATION,
        payload : {
            id: v4(),
            type: type,
            message: message
        }
    }
};

export const removeNotification = (id) => {
    return {
        type: ACTION_TYPES.REMOVE_NOTIFICATION,
        payload: {
            id: id
        }
    }
}

