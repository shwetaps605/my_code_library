/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./state/reducer";
import Notification from "./Notifications";
import { useContext } from "react";
import { useCallback } from "react";
import { addNotification } from "./state/actions";

const NotificationContext = createContext();

export const _useNotificationContext = () => {
    const dispatch = useContext(NotificationContext);
    if(!dispatch){
        console.error('useNotifications can only be used inside NotificationContext')
    }
    // const showNotification = useCallback(({type, message})=>{
    //     dispatch(addNotification({type, message}));
    // },[]);

    const showNotification = ({type, message}) => {
        console.log("showNotification called");
        dispatch(addNotification({type, message}));
    }
    return  { showNotification }
}

const NotificationProvider = (props) => {
    //state - updated state
    //dispatch - function dispatch is called to update the state by passsing the action to the reducer
    const [state, dispatch] = useReducer(reducer, {
        notifications: []
    });

    return(
        <NotificationContext.Provider value={dispatch}>
            <div className="notifications-wrapper">
                {state.notifications.map((notification)=>{
                    return(
                        <Notification 
                            key={notification?.id}
                            dispatch={dispatch}
                            type={notification.type}
                            message={notification.message}
                            id={notification.id}
                        />
                    );
                })}
            </div>
            {props.children}
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;


