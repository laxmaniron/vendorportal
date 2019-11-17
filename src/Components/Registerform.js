import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Registerform.css";
class Registerform extends React.Component {
  componentDidMount() {
    var c = document.getElementById("pic");

    c.onchange = () => {
      if (c.files && c.files[0]) {
        var f = new FileReader();
        f.onload = () => {
          document.getElementById("disp").src = f.result;
        };
        f.readAsDataURL(c.files[0]);
      }
    };

    window.VANTA.FOG({
      el: ".register-form",
      highlightColor: 0xffb0df,
      midtoneColor: 0xd7b5ff,
      lowlightColor: 0x8cff8a,
      blurFactor: 0.5,
      speed: 2.4
    });

    window.VANTA.RINGS({
      el: "body",
      backgroundColor: 0xffffff,
      color: 0xe32674
    });
  }

  render() {
    return (
      <form className="register-form card hoverable">
        <div>
          <div className="inform-register">
            <div className="registertitle pink-text">Enter your details</div>
            <br />

            <div className="register-form-container">
              <div className="input-field register-field">
                <input
                  id="Username"
                  type="text"
                  className="validate green-text"
                />
                <label htmlFor="Username">Username</label>
              </div>
              <div className="input-field register-field">
                <input id="FirstName" type="text" className="validate" />
                <label htmlFor="FirstName">First Name</label>
              </div>
              <div className="input-field register-field">
                <input id="LastName" type="text" className="validate" />
                <label htmlFor="LastName">Last Name</label>
              </div>
              <div className="input-field register-field">
                <input id="Email" type="email" className="validate" />
                <label htmlFor="Email">Email</label>
              </div>
              <div className="input-field register-field">
                <input id="Phone" type="number" className="validate" />
                <label htmlFor="Phone">Phone Number</label>
              </div>
              <div className="input-field register-field">
                <input id="Address" type="text" className="validate" />
                <label htmlFor="Address">Address</label>
              </div>
              <div className="input-field register-field">
                <input id="PinCode" type="number" className="validate" />
                <label htmlFor="PinCode">Pin-Code</label>
              </div>
              <div className="input-field register-field">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field register-field">
                <input
                  id="Confirmpassword"
                  type="password"
                  className="validate"
                />
                <label htmlFor="Confirmpassword">Confirm Password</label>
              </div>
              <div
                className="file-field input-field"
                style={{ width: "40%", minWidth: "250px" }}
              >
                <div className="btn teal darken-1">
                  <span>Select Image</span>
                  <input
                    type="file"
                    name="UploadPic"
                    id="pic"
                    accept="Image/*"
                  />
                </div>
                <div className="file-path-wrapper">
                  <input type="text" className="file-path validate" />
                </div>
              </div>

              <div
                className="pic-gender"
                style={{
                  marginLeft: "8%",
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap"
                }}
              >
                <div
                  className="gender-btns"
                  style={{
                    width: "100%",
                    display: "flex",
                    marginRight: "105px"
                  }}
                >
                  <div>
                    <p>
                      <label>
                        <input
                          className="with-gap"
                          name="group1"
                          type="radio"
                          checked
                        />
                        <span style={{ marginLeft: "0", marginRight: "40px" }}>
                          Male
                        </span>
                      </label>
                    </p>
                  </div>
                  <div>
                    <p>
                      <label>
                        <input
                          className="with-gap"
                          name="group1"
                          type="radio"
                        />
                        <span>Female</span>
                      </label>
                    </p>{" "}
                  </div>
                </div>
              </div>

              <div
                className="submitbtn"
                style={{ marginLeft: "20px", marginRight: "150px" }}
              >
                <button className="submit btn teal darken-1">
                  <span>Submit</span>
                </button>
              </div>
              <div>
                {" "}
                <img
                  src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Cat-PNG-Transparent-Image-500x811.png"
                  id="disp"
                  alt=""
                  style={{
                    height: "100px",
                    clipPath: "circle(40%)"
                  }}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </form>
    );
  }
}

export default Registerform;
