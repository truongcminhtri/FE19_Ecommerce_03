import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeaderTop extends Component {
  render() {
    return (
      <div>
        <div className="header-top row" id="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-5 header-top__time">
                <i className="far fa-clock" />
                <a className="navbar-brand">
                  Open time: 8:00 - 18:00 Monday - Sunday
                </a>
              </div>
              <div className="col-md-4 header-top__socials">
                <a>
                  <i className="fab fa-facebook-f" title="Facebook" />
                </a>
                <span>|</span>
                <a>
                  <i className="fab fa-youtube" title="Youtube" />
                </a>
                <span>|</span>
                <a>
                  <i className="fab fa-tumblr" title="Tumblr" />
                </a>
                <span>|</span>
                <a>
                  <i className="fab fa-vimeo-v" title="Vimeo" />
                </a>
                <span>|</span>
              </div>
              <div className="col-md-3 header-top__login">
                <Link to="/login">
                  <i className="fas fa-user">
                    <span>Đăng nhập</span>
                  </i>
                </Link>
                <Link to="/register">
                  <i className="fas fa-user-plus">
                    <span>Đăng kí</span>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
