import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo'


const NOTIFICATION_KEY = 'TODO:notifications'

createNotification = () => {
    return {
        title: 'Complete a Task',
        body: "👋  You should probably complete your tasks",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
          if (data === null) {
              Permissions.askAsync(Permissions.NOTIFICATIONS)
                  .then(({ status }) => {
                      if (status === 'granted') {
                          Notifications.cancelAllScheduledNotificationsAsync()
                          let t = new Date();
                          t.setSeconds(t.getSeconds() + 10);

                          const schedulingOptions = {
                            time: t,
                            repeat: 'minute'
                          };
                          Notifications.scheduleLocalNotificationAsync(
                              createNotification(),
                              schedulingOptions
                          )
                          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                      }
                  })
          }
      })
}

clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export {
  createNotification,
  setLocalNotification,
  clearLocalNotification,
}