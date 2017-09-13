import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

export const logUser = (email) => {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export const setGoals = (goals) => {
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;
}

export const setCompleted = (completeGoals) => {
    const action = {
        type: SET_COMPLETED,
        completeGoals
    }
    return action;
}