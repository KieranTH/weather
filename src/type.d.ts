type ReduxStoreAction = CaseReducer<AppState, { payload: any; type: string; }> | CaseReducerWithPrepare<AppState, PayloadAction<any, string, any, any>>;

type Theme = "light" | "dark"

type Coordinates = {
    latitude: number;
    longitude: number;
}