import React from "react";
import {
  ADDRESS,
  HOLIDAY_BUSINESS_HOURS,
  TEL,
  WEEKDAY_BUSINESS_HOURS,
  WEEKEND_BUSINESS_HOURS,
  ZIP,
} from "./const";

const Footer: React.FC = () => {
  return (
    <footer id="global-footer" className=" " role="contentinfo">
      <p id="pagetop" className=" ">
        <a className="scroll hover" href="#site">
          <span>
            ページの
            <br />
            先頭へ
          </span>
        </a>
      </p>

      <div id="global-footer-nav">
        <div className="inner">
          <div className="menu-%e3%82%b5%e3%82%a4%e3%83%89%ef%bc%86%e3%83%95%e3%83%83%e3%82%bf%e3%83%bc-container">
            <ul
              id="menu-%e3%82%b5%e3%82%a4%e3%83%89%ef%bc%86%e3%83%95%e3%83%83%e3%82%bf%e3%83%bc-1"
              className="menu"
            >
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1581">
                <a href="https://www.ito-spo.com/staff/">スタッフ紹介</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1586">
                <a href="https://www.ito-spo.com/menu/">メニュー</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1637">
                <a href="https://www.ito-spo.com/facility/">院内紹介</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1583">
                <a href="https://www.ito-spo.com/faq/">よくあるご質問</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1582">
                <a href="https://www.ito-spo.com/access/">アクセス</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1578">
                <a href="https://www.ito-spo.com/voices/">お客様の声</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-483 current_page_item menu-item-1584">
                <a href="https://www.ito-spo.com/contact/">
                  ご予約／お問い合わせ
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1579">
                <a href="https://www.ito-spo.com/sitemap/">サイトマップ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="global-footer-main-pc">
        <div className="inner clearfix">
          <div id="global-footer-main-pc-left">
            <p className="logo">
              <a href="https://www.ito-spo.com/">
                <img
                  src="https://www.ito-spo.com/wp-content/uploads/2021/11/5777edd641ee2628d33226ac11cac6ca1.png"
                  alt="アンドライフ整骨院鍼灸院"
                  loading="lazy"
                />
              </a>
            </p>
            <p className="address">
              {ZIP}　{ADDRESS}
            </p>
          </div>
          <div id="global-footer-main-pc-right">
            <div id="global-footer-main-pc-right-top">
              <p className="tel">
                <span className="tel-number">{TEL}</span>
              </p>
              <br />
              <a
                href="https://www.ito-spo.com/contact/"
                className="mail mail_half hover"
              >
                <span>ネット予約</span>
              </a>
              <a
                href="https://lin.ee/c7aeZt8"
                target="_blank"
                className="line_btn line_half hover"
              >
                <span>LINE予約</span>
              </a>
            </div>
            <div className="info">
              <dl>
                <dt>受付時間</dt>
                <dd>平日:{WEEKDAY_BUSINESS_HOURS}</dd>
                <dd>土曜:{WEEKEND_BUSINESS_HOURS}</dd>
                <dd>祝日:{HOLIDAY_BUSINESS_HOURS}</dd>
              </dl>
              <dl>
                <dt>定休日</dt>
                <dd>日曜</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
