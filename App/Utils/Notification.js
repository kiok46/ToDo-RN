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

setLocalNotification = (taskEndTime, uniqueId) => {
  var triggerTime = new Date();
  triggerTime.setMinutes(taskEndTime.getMinutes() - 10);

  AsyncStorage.getItem(uniqueId)
      .then(JSON.parse)
      .then((data) => {
          if (data === null) {
              Permissions.askAsync(Permissions.NOTIFICATIONS)
                  .then(({ status }) => {
                      if (status === 'granted') {
                          Notifications.cancelAllScheduledNotificationsAsync()

                          const schedulingOptions = {
                            time: triggerTime,
                          };
                          Notifications.scheduleLocalNotificationAsync(
                              createNotification(),
                              schedulingOptions
                          )
                          AsyncStorage.setItem(uniqueId, JSON.stringify(true))
                      }
                  })
          }
      })
}

clearLocalNotification = (uniqueId) => {
  return AsyncStorage.removeItem(uniqueId)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export {
  createNotification,
  setLocalNotification,
  clearLocalNotification,
}