import { SET_DARK_THEME, SET_LIGHT_THEME } from "../types/themeActionTypes";

export const setLightTheme = theme => dispatch => {
    localStorage.setItem('themeType', 'light')
    dispatch({
        type: SET_LIGHT_THEME,
        payload: theme
    })
}

export const setDarkTheme = theme => dispatch => {
    localStorage.setItem('themeType', 'dark')
    dispatch({
        type: SET_DARK_THEME,
        payload: theme
    })
}