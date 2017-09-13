import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';

export default class CompleteGoalList extends Component {
    
    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({email, title});
            });
        });
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
