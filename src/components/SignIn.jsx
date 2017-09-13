import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: {
            message: ''
        }
    }

    singIn = () => {
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error);
                this.showMessage(error.message);
            });
    }

    showMessage = (msg) => {
        this.setState({error: {message: msg}});
        setTimeout(() => {
            this.setState({error: { message: '' }});
        }, 2500);
    }
    
    render() {
        return (
            <div className="form-inline">
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        style={{marginRight: '5px'}}
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        style={{marginRight: '5px'}}
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.singIn()}
                    >
                        Sign In
                    </button>
                </div>
                { this.state.error.message }
                <div><Link to={'/signup'}>Sign up instead</Link></div>
            </div>
        )
    }
}
