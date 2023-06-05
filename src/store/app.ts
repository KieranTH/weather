import {PayloadAction, createSlice} from "@reduxjs/toolkit"

//--- App State ---
type AppState = {
    theme: Theme
}

const initialState: AppState = {
    theme: 'light'
}


//--- Actions ---
const ActionTheme: ReduxStoreAction = (state: AppState, action: PayloadAction<Theme>) => {
    return state + action.payload;
}


type AppActions = {
    changeTheme: ReduxStoreAction;
}
const actions: AppActions = {
    changeTheme: ActionTheme
}


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: actions
})

export const {changeTheme} = appSlice.actions

export const appTheme = (state: StoreReducer) => state.app.theme;

export default appSlice.reducer;