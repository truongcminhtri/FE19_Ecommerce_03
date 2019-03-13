import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeaderMenu extends Component {
  render() {
    return (
      <div>
        <div className="menu row" id="menu">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark menu__navbar">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="menu__toggler">
                  <div className="menu__toggler__icon" />
                  <div className="menu__toggler__icon" />
                  <div className="menu__toggler__icon" />
                </div>
                <ul className="navbar-nav menu__navbar__name">
                  <li>
                    <Link to="/home">Trang Chủ</Link>
                  </li>
                  <li>
                    <Link to="/grid">Giới Thiệu</Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Sản Phẩm<span className="caret" />
                    </a>
                    <ul className="dropdown-menu menu__navbar__name__dropdown">
                      <li>
                        <Link to="/list">Sản Phẩm 1</Link>
                      </li>
                      <li>
                        <Link to="/list">Sản Phẩm 2</Link>
                      </li>
                      <li>
                        <Link to="/list">Sản Phẩm 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Sản Phẩm Mới<span className="caret" />
                    </a>
                    <ul className="dropdown-menu menu__navbar__name__dropdown modified">
                      <li>
                        <Link to="/detail">Sản Phẩm Mới 1</Link>
                      </li>
                      <li>
                        <Link to="/detail">Sản Phẩm 2 Mới</Link>
                      </li>
                      <li>
                        <Link to="/detail">Sản Phẩm Mới 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="../html/news.html">Tin Tức</a>
                  </li>
                  <li>
                    <a href="../html/contact.html">Liên Hệ</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
