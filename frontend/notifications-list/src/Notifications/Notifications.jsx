import { useMemo, useState, useRef} from "react";
import { computeNotificationClassBasedOnType } from "./utils";
import { useEffect } from "react";
import { removeNotification } from "./state/actions";



// eslint-disable-next-line react/prop-types
const Notification = ({message, type, id, dispatch}) => {

    //console.log("NOTIFICATION ID:", id)

    const [width, setWidth] = useState(0);

    const timerRef = useRef(null);

    const { classes } = useMemo(()=>{
        return computeNotificationClassBasedOnType(type)
    },[type])

    const handleStartTimer = () => {
        if(!timerRef.current) {
            timerRef.current = setInterval(
                () => {
                    setWidth((previousWidth) => {
                        if(previousWidth < 100) {
                            //console.log("updating progressbar width...")
                            return previousWidth + 0.5;
                        }
                        handleCloseNotification();
                        return previousWidth;
                    })
                },
                50
            );
        }
        
    };

    const handlePauseTimer = () => {
        //console.log('handle pause timer called')
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    const handleCloseNotification = () => {
        //console.log("CLOSING NOTIFICATIONSS")
        handlePauseTimer();
        setTimeout(()=> { dispatch(removeNotification(id))},500);

    }

    useEffect(()=>{
        handleStartTimer();
    },[])




    return(
        <div onMouseEnter = {handlePauseTimer} onMouseLeave={handleStartTimer} className={`notification-item ${classes}`}>
            <p>{message}</p>
            <div className="progress-bar" style={{ width: `${width}%`}}/>
        </div>
    )

}

export default Notification;