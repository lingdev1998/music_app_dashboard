import { SET_DARK_THEME, SET_LIGHT_THEME } from "../types/themeActionTypes";

const initialState = {
    themeType: 'light',
    theme: {
        applicationBackground: '#eee',
        applicationColor: '#444',
        backgroundColor: '#fff',
        color: '#444',
        borderColor: '#eee',
        inputBorderColor: '#eee',
        boxShadowColor: '#aaa',
        opacity: 1
    }
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIGHT_THEME:
            return { ...state, theme: action.payload, themeType: 'light' }
        case SET_DARK_THEME:
            return { ...state, theme: action.payload, themeType: 'dark' }
        default:
            return state;
    }
    return state;
}