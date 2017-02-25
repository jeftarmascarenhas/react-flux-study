export default class NotifyMe {

    init(){

        console.log(Notification.permission);

        if(!('Notification' in window)){
            console.log('Este browser não tem suporte a Notificação!');
        }
        else if(Notification.permission === 'granted') {
            console.log(`${Notification.permission} granted notication`);
        }
        else if(Notification.permission !== 'denied') {
            console.log('Erro notication');
            Notification.requestPermission(permission => {
                if(permission === 'granted') {
                    let notication = new Notification('Obrigado por aceitar receber notificações!');
                }
            });
        }

        Notification.requestPermission();
    }

    customNotification() {
        let options = {
            body:'Está gostando dos meus estudos?',
            icon: 'https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png'
        },
        n = new Notification('Web notification!', options);
    }
}
