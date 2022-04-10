import {ADD_POSITIONS} from './positionActions';

export const positionReducer = (state = [], action) => {
    switch (action.type){
        case ADD_POSITIONS: {
            return action.positions
        }
        default : return state
    }
}