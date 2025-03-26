

export const GainNotificationPermission =async () =>{

    if(Notification.permission === "default"){
        try {
            const permission = await Notification.requestPermission();
            console.log(permission);
        } catch (err) {
            console.error(err);
        }
    }
}