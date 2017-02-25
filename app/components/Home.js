import React, {Component} from 'react';
import NotifyMe from '../WebNotification';

export default class Home extends Component {

    constructor() {
        super();
        this.handlerClick.bind(this);
        new NotifyMe().init();
    }


    handlerClick(event) {
        event.preventDefault();
        new NotifyMe().customNotification();
    }

    render() {
        return(
            <div>
                <h1>Home Page</h1>
                <button onClick={this.handlerClick}>Notifique me!</button>
            </div>
        );
    }
}