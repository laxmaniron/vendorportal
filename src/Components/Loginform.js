import React from "react";
import { Link } from "react-router-dom";

class Loginform extends React.Component {
  componentDidMount() {
    window.VANTA.FOG({
      el: ".login-form",
      highlightColor: 0xffa8dc,
      midtoneColor: 0xd5b2ff,
      lowlightColor: 0xb3ffb2,
      baseColor: 0xffebf6,
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
      <form className="login-form card hoverable">
        <div>
          <div className="inform ">
            <div className="logintitle pink-text">Login Here</div>
            <div className="input-field">
              <input id="Username" type="text" className="validate" />
              <label htmlFor="Username">Username</label>
            </div>
            <div className="input-field">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="loginbtn">
              <button className="login btn teal darken-1">
                <span>Login</span>
              </button>
            </div>
            <br />

            <div className="forgotrecover">
              <Link to="/create-account">Create Account</Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Loginform;
