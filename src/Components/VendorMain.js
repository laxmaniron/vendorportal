import React, { Component } from "react";

import Vendorbanner from "./Vendorbanner";
import Vendorfile from "./Vendorfile";
import Vendornotification from "./Vendornotification";

class VendorMain extends Component {
  componentDidMount() {
    // document.querySelector("body").style.backgroundColor = "white";
  }
  render() {
    return (
      <div style={{ backgroundColor: "white", marginBottom: "0%" }}>
        <Vendorbanner />

        <div>
          <Vendornotification />
        </div>
        <div style={{ backgroundColor: "rgba(0,0,0,0)" }}>
          <div className="container file-container">
            <p className="file-title pink-text" style={{ fontSize: "2.5rem" }}>
              Got new dresses to sell?
            </p>
            <p className="file-subtitle teal-text" style={{ fontSize: "2rem" }}>
              Upload them here
            </p>
            <div className="card hoverable pink lighten-5">
              <Vendorfile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorMain;
