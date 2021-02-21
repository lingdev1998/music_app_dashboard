import { GET_TEAMS, GET_TEAMS_SUCCESS, GET_TEAMS_FAILURE, DRAG_TEAM } from '../types/dragActionTypes';
const initialState = {
    stages: [
        {stageId: 'cl', name: 'Champions League'},
        {stageId: 'el', name: 'Eupora League'},
        {stageId: 'th', name: 'Top Half'},
        {stageId: 'bh', name: 'Bottom Half'}, 
        {stageId: 'rel', name: 'Relegated'}
    ],
    teams: [
        { id: 1, name: 'Manutd', pos: 1, stage: 'cl', meta: '' },
        { id: 2, name: 'Chelsea', pos: 2, stage: 'cl', meta: '' },
        { id: 3, name: 'Mancity', pos: 3, stage: 'cl', meta: '' },
        { id: 4, name: 'Arsenal', pos: 4, stage: 'el', meta: '' },
        { id: 5, name: 'Liverpool', pos: 5, stage: 'th', meta: '' },
        { id: 6, name: 'Tottenham', pos: 6, stage: 'th', meta: '' },
        { id: 7, name: 'Everton', pos: 7, stage: 'bh', meta: '' },
        { id: 8, name: 'Burnley', pos: 8, stage: 'bh', meta: '' },
        { id: 9, name: 'West Ham', pos: 9, stage: 'rel', meta: '' },
        { id: 10, name: 'Watford', pos: 10, stage: 'rel', meta: '' }
    ]
}

export const dragReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return state;
        case GET_TEAMS_SUCCESS:
            return state;
        case GET_TEAMS_FAILURE:
            return state;
        case DRAG_TEAM:
            return {
                ...state, teams: [...state.teams.map(data => {
                    return data.id === action.payload.id ? action.payload : data
                }
                )]
            };
        default:
            return state;
    }
    return state;
}