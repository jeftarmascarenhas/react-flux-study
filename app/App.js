const uau = 'UaU';
console.log(`${uau} webpack está funcionando`);

import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from './EventEmitter';
import Dispatcher from './Dispatcher';
import ForumDispatcher from './ForumDispatcher';
import Forum from './components/Forum';

ReactDOM.render(<Forum />, document.getElementById('app'));

let myemiiter =  new EventEmitter();

myemiiter.on('STARTED_THE_APP', () => {
    console.log('started the app');
});

myemiiter.on('STARTED_THE_APP', () => {
    console.log('started the app #2');
});

myemiiter.emit('STARTED_THE_APP');

ForumDispatcher.register( action => {
    console.log('received an action');
    console.log(action);
});