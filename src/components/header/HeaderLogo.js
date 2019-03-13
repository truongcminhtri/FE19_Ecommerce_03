import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeaderLogo extends Component {
  render() {
    return (
      <div>
        <div className="header row" id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 header__logo">
                <div className="header__logo__name">
                  <p className="header__logo__name__main">
                    Green<span>Shop</span>
                  </p>
                  <p className="header__logo__name__text">
                    Món quà từ thiên nhiên
                  </p>
                </div>
                <div className="header__logo__img">
                  <img src={require("../../images/hdt1.png")} alt= "logo"/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-12 header__contact">
                  <p className="header__contact__help">
                    Hỗ trợ: (04) 6674 2332 - (04) 3786 8904
                  </p>
                  <input
                    className="textbox header__contact__input"
                    type="textbox"
                    placeholder=" Tìm kiếm..."
                  />
                  <a className="search-modified" href="../html/cart.html">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
              <div className="col-md-2 header__card">
                <Link to="/cart">
                  <i className="fas fa-shopping-basket" />0 Sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
