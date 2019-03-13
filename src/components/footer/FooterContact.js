import React, { Component } from "react";

export default class FooterContact extends Component {
  render() {
    return (
      <div>
        <div className="row footer__contact">
          <div className="col-md-8">
            <div className="footer__contact__left">
              <ul>
                <li>
                  <i>Sitemap</i>
                </li>
                <li>
                  <i>Danh mục sản phẩm</i>
                </li>
                <li>
                  <i>Hợp tác</i>
                </li>
                <li>
                  <i>Thông tin liên hệ</i>
                </li>
                <li>
                  <i>Câu hỏi thường gặp</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer__contact__right">
              <ul>
                <i className="fab fa-cc-visa" />
                <i className="fab fa-cc-mastercard" />
                <i className="fab fa-cc-paypal" />
                <i className="fab fa-cc-discover" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
