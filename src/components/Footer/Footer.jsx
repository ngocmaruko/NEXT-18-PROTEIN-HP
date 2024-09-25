import React from "react";
import "./Footer.css";
import logo from '../../assets/logo_.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="foot">
        <div className="box">
          <div className="foot-wrap">
            <div className="footer-container">
              <div className="footer-column logo-column">
                <div className="logo">
                  <Link to="/">
                  <h1><img src={logo} alt="Logo" /></h1>
                  </Link>
                </div>
                <div className="address">
                  <h6>株式会社Hongo</h6>
                  <p>〒113-0033 東京都文京区本郷3-40-10 三翔ビル本郷6階　地図</p>
                  <p>電話：03-3868-6310</p>
                </div>
              </div>
              <div className="footer-column links-column">
                <ul className="link-group">
                  <li>Next-18 Proteinについて</li>
                  <li>会社概要</li>
                </ul>
                <ul className="link-group">
                  <li>
                    商品紹介
                    <ul className="submenu">
                      <li>ヨーグルト風味</li>
                      <li>ココア味</li>
                    </ul>
                  </li>
                </ul>
                <ul className="link-group">
                  <li>お問い合わせ</li>
                  <li>お客様の声</li>
                  <li>専門家からのアドバイス</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section with full-width background */}
      <div className="copyright-background">
        <div className="copyright">
          <p>Copyright Hongo, Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
