import React, { Component } from "react";
import { FooterList } from "./FooterList";

export default class FooterAbout extends Component {
  render() {
    let arrInfor = [
      "Tài khoản của tôi",
      "Sản phẩm yêu thích",
      "Lịch sử mua hàng",
      "Chính sách đổi trả"
    ];
    let arrService = [
      "Hệ thống cửa hàng",
      "Hướng dẫn mua hàng",
      "Hướng dẫn thanh toán",
      "Tích điểm đổi quà"
    ];
    let arrPromotion = [
      "Chính sách giao hàng",
      "Chính sách đổi trả sản phẩm",
      "Chính sách bảo hành",
      "Giới thiệu sản phẩm mới"
    ];
    let arrNews = [
      "Tin mới",
      "Khuyến mãi",
      "Tuyển dụng",
      "Dowload"
    ];
    return (
      <div>
        <div className="row footer__about">
          <div className="col-md-4 footer__about__title">
            <div className="footer__about__title__name">
              <p className="main">
                Green<span>Shop</span>
              </p>
              <p className="text">Món quà từ thiên nhiên</p>
              <br />
              <p>
                Green shop được thành lập từ 8/2010 được sự tin tưởng của khách
                hàng trong suốt thời gian hoạt động đến nay cửa hàng ngày một
                phát triển
              </p>
              <i className="fas fa-mobile-alt">
                <a>Điện thoại : (84-4) 66.558.868</a>
              </i>
              <i className="far fa-envelope">Email: info@dkt.com.vn</i>
            </div>
          </div>
          <div className="col-md-8 footer__about__customer">
            <div className="footer__about__customer__infor">
              <p>Thông tin khách hàng</p>
              <ul>
                <FooterList footerList={arrInfor} />
              </ul>
            </div>
            <div className="footer__about__customer__service">
              <p>Hỗ trợ dịch vụ</p>
              <ul>
                <FooterList footerList={arrService} />
              </ul>
            </div>
            <div className="footer__about__customer__discount">
              <p>Chính sách ưu đãi</p>
              <ul>
                <FooterList footerList={arrPromotion} />
              </ul>
            </div>
            <div className="footer__about__customer__news">
              <p>Tin tức</p>
              <ul>
                <FooterList footerList={arrNews} />
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
