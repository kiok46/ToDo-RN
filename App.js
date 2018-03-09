import React, { Component } from 'react';
import MainApp from './App/Containers/RootContainer';
import { Provider } from 'react-redux';
import store from './App/Store';


class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <MainApp/>
            </Provider>
        )
    }
}

export default App