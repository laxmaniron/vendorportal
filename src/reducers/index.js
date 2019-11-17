import { combineReducers } from "redux";

import apparelUploadReducer from "./apparelUploadReducer";

export default combineReducers({
  apparelUpload: apparelUploadReducer
});
