const uau = 'UaU';
console.log(`${uau} webpack está funcionando`);

import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from './EventEmitter';
import Dispatcher from './Dispatcher';
import ForumDispatcher from './dispatcher/ForumDispatcher';
import Forum from './components/Forum';

ReactDOM.render(<Forum />, document.getElementById('app'));