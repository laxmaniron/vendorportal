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
        <div className="grey lighten-4">
          <div className="container file-container">
            <p className="file-title">Got new dresses to sell?</p>
            <p className="file-subtitle">Upload them here</p>
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
