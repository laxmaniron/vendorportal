import { APPAREL_UPLOADS } from "../actions/types";

const initialState = {
  apparelUploads: {},
  uploadDone: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APPAREL_UPLOADS:
      return {
        ...state,
        apparelUploads: action.payload,
        uploadDone: true
      };

    default:
      return state;
  }
}
