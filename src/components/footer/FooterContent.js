import React, { Component } from "react";
import "./style.css";

export default class FooterContent extends Component {
  render() {
    return (
      <div>
        <div className="row footer__content">
          <div className="col-md-4 footer__content__socials">
            <div className="footer__content__socials__name">
              <p className="name">Kênh thông tin từ chúng tôi:</p>
            </div>
            <div className="footer__content__socials__icon">
              <a>
                <i className="fab fa-facebook-f" title="Facebook" />
              </a>
              <a>
                <i className="fab fa-youtube" title="Youtube" />
              </a>
              <a>
                <i className="fab fa-tumblr" title="Tumblr" />
              </a>
              <a>
                <i className="fab fa-vimeo-v" title="Vimeo" />
              </a>
            </div>
          </div>
          <div className="col-md-2 footer__content__email">
            <p className="name">Đăng ký nhận email từ chúng tôi</p>
          </div>
          <div className="col-md-6 footer__content__button">
            <input
              className="textbox footer__content__button__textbox"
              type="text"
            />
            <i className="fab fa-telegram-plane" />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
