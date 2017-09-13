import React, { Component } from 'react';
import { firebaseApp } from '../firebase.js'

export default class App extends Component {
    signOut = () => {
        firebaseApp.auth().signOut();
    }
    render() {
        return (
            <div>
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        )
    }
}
