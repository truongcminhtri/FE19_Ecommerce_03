import React, { Component } from "react";
import "./style.css";
import FooterContact from "./FooterContact";
import FooterAbout from "./FooterAbout";
import FooterContent from "./FooterContent";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer row" id="footer">
        <div className="container">
          <FooterContent />
          <FooterAbout />
          <FooterContact />
          <div className="design row">
            <p>Thiết kế bởi Bizweb &copy;</p>
          </div>
        </div>
      </div>
    );
  }
}
