import React from "react";
import XLSX from "xlsx";
import "./Vendorfile.css";

import { connect } from "react-redux";
import { postapparelUpload } from "../actions/apparelUploadAction";
import PropTypes from "prop-types";

class Vendorfile extends React.Component {
  componentDidMount() {
    document.getElementsByClassName("file-xl")[0].onchange = function(e) {
      // console.log(e.target.files);
      // this.setState({ vendorfiles: e.target.files });

      var reader = new FileReader();
      reader.readAsArrayBuffer(e.target.files[0]);

      reader.onload = function(e) {
        var data = new Uint8Array(reader.result);
        var book = XLSX.read(data, { type: "array" });
        var table = XLSX.write(book, { type: "binary", bookType: "html" });
        document.getElementsByClassName("xl-sheet")[0].innerHTML = table;
        document.getElementsByClassName("xl-sheet")[0].style.display = "block";
      };

      var reader2 = new FileReader();
      reader2.readAsArrayBuffer(e.target.files[1]);

      reader2.onload = function(e) {
        var data2 = new Uint8Array(reader2.result);
        var book2 = XLSX.read(data2, { type: "array" });
        var table2 = XLSX.write(book2, { type: "binary", bookType: "html" });
        document.getElementsByClassName("xl-sheet-2")[0].innerHTML = table2;
        document.getElementsByClassName("xl-sheet-2")[0].style.display =
          "block";
      };

      var reader3 = new FileReader();
      reader3.readAsArrayBuffer(e.target.files[2]);

      reader3.onload = function(e) {
        var data3 = new Uint8Array(reader3.result);
        var book3 = XLSX.read(data3, { type: "array" });
        var table3 = XLSX.write(book3, { type: "binary", bookType: "html" });
        document.getElementsByClassName("xl-sheet-3")[0].innerHTML = table3;
        document.getElementsByClassName("xl-sheet-3")[0].style.display =
          "block";
      };
    };
  }

  state = {
    vendorfiles: ""
  };

  fileSelectedHandler = e => {
    console.log("ok");
  };

  onfileSubmit = () => {
    var f = document.getElementsByClassName("file-xl")[0].files;
    // console.log(f);

    this.props.postapparelUpload(f);
  };

  render() {
    const { vendorfiles } = this.state;
    return (
      <form
        action="#"
        encType="multipart/form-data"
        className="form-dress container"
      >
        <div className="file-field input-field">
          <div className="btn waves-effect waves-red pink">
            <span style={{ fontWeight: "700" }}>File for Dresses</span>
            <input
              type="file"
              name="vendorfiles"
              // value={vendorfiles}
              className="file-xl"
              accept=".xlsx"
              multiple={true}
              onChange={this.fileSelectedHandler}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <br />
        <div
          className="xl-sheet "
          style={{ display: "none", fontWeight: "600" }}
        ></div>
        <hr />
        <div className="xl-sheet-2" style={{ display: "none" }}></div>
        <hr />
        <div className="xl-sheet-3" style={{ display: "none" }}></div>

        {/*
        <div className="file-field input-field">
          <div className="btn waves-effect waves-red pink white-text">
            <span style={{ fontWeight: "700" }}>File for Colors</span>
            <input type="file" className="file-xl-2" accept=".xlsx" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <br />
        <div className="xl-sheet-2" style={{ display: "none" }}></div>
        <hr />

        <div className="file-field input-field">
          <div className="btn waves-effect waves-red pink white-text">
            <span style={{ fontWeight: "700" }}>
              File for Dress Information
            </span>
            <input type="file" className="file-xl-3" accept=".xlsx" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <br />
        <div className="xl-sheet-3" style={{ display: "none" }}></div> */}
        <hr />
        <div
          className="btn teal darken-2"
          style={{ float: "right", fontWeight: "700" }}
          onClick={this.onfileSubmit}
        >
          Submit
        </div>
        <br />
      </form>
    );
  }
}

Vendorfile.propTypes = {
  postapparelUpload: PropTypes.func.isRequired,
  apparelUploads: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apparelUploads: state.apparelUpload
});

export default connect(mapStateToProps, { postapparelUpload })(Vendorfile);
