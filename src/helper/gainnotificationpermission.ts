

export const GainNotificationPermission =async () =>{

    if(Notification.permission === "default" || Notification.permission === "denied"){
        try {
            const permission = await Notification.requestPermission();
            console.log(permission);
        } catch (err) {
            console.error(err);
        }
    }
}