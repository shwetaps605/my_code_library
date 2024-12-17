import { NOTIFICATION_TYPES } from "./constants";

export const computeNotificationClassBasedOnType = (type) => {
    switch(type) {
        case NOTIFICATION_TYPES.SUCCESS: {
            return {
                classes: 'success'
            };
        }

        case NOTIFICATION_TYPES.INFO: {
            return {
                classes: 'info'
            }
        }

        case NOTIFICATION_TYPES.ERROR: {
            return {
                classes: 'error'
            }
        }

        case NOTIFICATION_TYPES.WARNING: {
            return {
                classes: 'warning'
            }
        }
    }
}