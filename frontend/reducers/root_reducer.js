import { combineReducers } from "redux";

import entitiesReducer from "./entitites_reducer";
import sessionReducer from "./sessions_reducer";
import errorsReducer from "./errors_reducer";
import modalReducer from "./modal_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    modal: modalReducer
});

export default rootReducer;
