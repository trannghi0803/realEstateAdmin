import { EventEmitter } from "events";
import React, { Component } from "react";
import { Constants } from "./constants";
import "bootstrap/dist/css/bootstrap.css";
import Routes from "./routes/routes";

interface IProps {
}

interface IStateProps {
    renderKey?: number;
}

class App extends Component<IProps, IStateProps> {

    constructor(props: any) {
        super(props);
        this.state = {
            renderKey: Date.now(),
        };

        // config log
        const mw = window as any;
        mw.__EventEmitter = new EventEmitter();
        mw.__DEV__ = false;  // true: dev_enviroment

        if (__DEV__) {
            console.log(`%c *** App#constructor: READY *** `, Constants.Styles.CONSOLE_LOG_NOTICE);
        }
    }
    public componentWillUnmount() {
        if (__DEV__) {
            console.log(`%c *** App#componentWillUnmount: DESTROYED *** `, Constants.Styles.CONSOLE_LOG_NOTICE);
        }
    }

    public render() {
        return <Routes />;
    }
}

export default App;
