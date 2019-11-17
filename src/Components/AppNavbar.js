import React, { Component } from "react";
import { Link } from "react-router-dom";

// import { logout } from "../../actions/auth";

export class AppNavbar extends Component {
  componentDidMount() {
    window.VANTA.RINGS({
      el: "body",
      backgroundColor: 0xffffff,
      color: 0xe32674
    });

    // document.getElementsByClassName(
    //   "notification-btn"
    // )[0].onclick = function() {
    //   document.getElementsByClassName(
    //     "notification-container"
    //   )[0].style.display = "block";
    // };
    // document.getElementsByClassName("notif-btn-close")[0].onclick = function() {
    //   document.getElementsByClassName(
    //     "notification-container"
    //   )[0].style.display = "none";
    // };
  }

  render() {
    // const { isAuthenticated, user } = this.props.auth;

    const isAuthenticated = false;
    const user = null;

    const authLinks = (
      <ul id="nav-mobile" className="right">
        <li className="pink-text">
          <a className="btn-floating red notification-btn">
            <i className="material-icons">notifications</i>
          </a>
        </li>
        <li>
          <Link to="/create-account" className="profile-pic">
            <img
              style={{
                clipPath: "circle(40%)",
                height: "50px",
                marginTop: "5px"
              }}
              src="https://images.squarespace-cdn.com/content/v1/51b078a6e4b0e8d244dd9620/1551265530988-OHLW7IPRUGQ9APEO02PQ/ke17ZwdGBToddI8pDm48kNM8Y-0xzL40mkiq0BQGXjVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIWECi2j8UHMrbArk7T-41pt51Lh360WIkMAHYFowMzfcKMshLAGzx4R3EDFOm1kBS/Trump-header.jpg"
            />
          </Link>
        </li>

        <li>
          <Link
            to="/showprofile"
            className="pink-text"
            style={{
              fontSize: "1.2rem"
            }}
          >
            Surya
          </Link>
        </li>

        <li>
          <Link
            to="/login-account"
            className="pink-text"
            style={{
              fontSize: "1.2rem"
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul id="nav-mobile" className="right">
        <li>
          <Link
            to="/create-account"
            className="pink-text"
            style={{
              fontSize: "1.2rem"
            }}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/login-account"
            className="pink-text"
            style={{
              fontSize: "1.2rem"
            }}
          >
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="white">
        <div className="nav-wrapper">
          <a
            href="#"
            className="brand-logo pink-text"
            style={{
              transform: "translateX(-40%)"
            }}
          >
            StyleMyWay
          </a>
          <ul className="left">
            <Link to="/vendorhome">
              <li>
                <img
                  src={require("./img/favicon.png")}
                  style={{ height: "70px", marginLeft: "38%" }}
                />
              </li>
              <li>
                <span
                  className="pink-text"
                  style={{
                    minWidth: "200px",
                    marginLeft: "40%",
                    fontSize: "1.5rem"
                  }}
                >
                  VendorPortal
                </span>
              </li>
            </Link>
          </ul>
          {authLinks}
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
