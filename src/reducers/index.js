import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { calendarReducer } from './calendar_reducer';
import { profileReducer } from './profile_reducer';
import { postReducer } from './post_reducer';
import { authReducer } from './auth_reducer';
import { formReducer } from "./testFormReducer";
import { formArrayReducer } from "./formArrayReducer";
import { secondArrayReducer } from './secondArrayReducer';
import { thirdArrayReducer } from './thirdArrayReducer';
import { dashboardReducer } from './dashboardReducer';
import { googleReducer } from './googleReducer';
import { notificationReducer } from './notificationReducer';
import { dragReducer } from './dragReducer';
import { selectReducer } from "./selectReducer";
import { chartsReducer } from "./chartsReducer";
import { themeReducer } from "./themeReducer";
export const rootReducer = combineReducers({
    form: FormReducer,
    dashboardReducer,
    calendarReducer,
    profileReducer,
    postReducer,
    authReducer,
    formReducer,
    formArrayReducer,
    secondArrayReducer,
    thirdArrayReducer,
    googleReducer,
    notificationReducer,
    dragReducer,
    selectReducer,
    chartsReducer,
    themeReducer,
})

export default rootReducer;