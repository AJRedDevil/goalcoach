import React, { Component } from 'react';
import { goalRef } from '../firebase.js';

export default class GoalList extends Component {
    componentDidMount () {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                // let goalObject = goal.val();
                const { email, title } = goal.val();
                goals.push({ email, title });
            });
            console.log('goals', goals);
        });
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
