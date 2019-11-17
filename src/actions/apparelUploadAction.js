import { APPAREL_UPLOADS } from "./types";
import axios from "axios";

// postapparelUpload

export const postapparelUpload = files => dispatch => {
  //headers

  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  console.log(files);

  let body = new FormData();
  body.append("vendorfiles[]", files[0]);
  body.append("vendorfiles[]", files[1]);
  body.append("vendorfiles[]", files[2]);

  console.log(body);

  axios.post("/api/vendorportal/vendorfileupload", body, config).then(res => {
    console.log(res.data);
    dispatch({
      type: APPAREL_UPLOADS,
      payload: res.data
    });
  });
};
