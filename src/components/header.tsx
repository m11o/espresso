import React from "react";
import Link from "next/link";

import {
  SITE_TITLE,
  ZIP,
  ADDRESS,
  TEL,
  TEL_WITHOUT_HYPHEN,
  SITE_NAME,
  WEEKDAY_BUSINESS_HOURS,
  WEEKEND_BUSINESS_HOURS,
  HOLIDAY_BUSINESS_HOURS,
} from "./const";

const Header: React.FC = () => {
  return (
    <>
      <header id="global-header">
        <h1 className="site-title">
          <span className="inner">{SITE_TITLE}</span>
        </h1>

        <div className="inner">
          <div id="global-header-main-pc" className="clearfix">
            <div id="global-header-main-pc-left">
              <p className="logo">
                <a href="https://www.ito-spo.com/">
                  <img
                    src="https://www.ito-spo.com/wp-content/uploads/2021/11/5777edd641ee2628d33226ac11cac6ca1.png"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </p>
              <p className="address">
                {ZIP}
                <br />
                {ADDRESS}
              </p>
            </div>
            <div id="global-header-main-pc-right">
              <p className="tel">
                <span className="tel-number">{TEL}</span>
              </p>
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

        <div className="inner">
          <div id="global-header-main-sp" className="clearfix fixed-set">
            <div id="global-header-main-sp-left">
              <p className="logo">
                <a href="https://www.ito-spo.com/">
                  <img
                    src="https://www.ito-spo.com/wp-content/uploads/2021/11/5777edd641ee2628d33226ac11cac6ca1.png"
                    title="アンドライフ整骨院鍼灸院"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </p>
            </div>
            <div id="global-header-main-sp-right">
              <span id="menu_btn" className="hover"></span>
              <a href={`tel:${TEL_WITHOUT_HYPHEN}`} className="tel">
                <span>電話をかける</span>
              </a>
            </div>
          </div>
        </div>

        <div className="inner">
          <p id="announcement">ご予約制</p>
        </div>

        <div id="sp-menu">
          <div id="sp-menu-contents"></div>
          <div id="sp-menu-lightbox"></div>
        </div>

        <nav id="global-nav-pc" className="fixed-set" role="navigation">
          <div className="menu-%e3%82%b0%e3%83%ad%e3%83%bc%e3%83%90%e3%83%ab%e3%83%a1%e3%83%8b%e3%83%a5%e3%83%bc-container">
            <ul
              id="menu-%e3%82%b0%e3%83%ad%e3%83%bc%e3%83%90%e3%83%ab%e3%83%a1%e3%83%8b%e3%83%a5%e3%83%bc"
              className="menu"
            >
              <li
                id="menu-item-1575"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1575"
              >
                <a href="https://www.ito-spo.com/menu/">メニュー</a>
              </li>
              <li
                id="menu-item-1590"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1590"
              >
                <a href="https://www.ito-spo.com/voices/">お客様の声</a>
              </li>
              <li
                id="menu-item-1576"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1576"
              >
                <a href="https://www.ito-spo.com/access/">アクセス</a>
              </li>
              <li
                id="menu-item-1591"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1591"
              >
                <a href="https://www.ito-spo.com/contact/">
                  ご予約／お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="global-nav-sp" className="fixed " role="navigation">
          <p id="ff-sp-head-03" className="ff-sp-head"></p>
          <div id="ff-sp-contents">
            <a
              id="ff-sp-03-tel"
              className=""
              href={`tel:${TEL_WITHOUT_HYPHEN}`}
            ></a>
            <a
              id="ff-sp-03-line"
              className=""
              href="https://lin.ee/c7aeZt8"
              target="_blank"
            ></a>
          </div>
        </div>
      </header>

      <div id="sp-modal">
        <div className="sp-modal-head">
          <div className="close-btn">
            <img
              src="https://theme.selfull.jp/images/common/sp-modal-close-btn.png"
              alt="閉じる"
              loading="lazy"
            />
          </div>
        </div>
        <div className="sp-modal-main">
          <div className="sp-modal-main-line">
            <p className="mb-10">
              <img
                src="https://theme.selfull.jp/images/common/sp-modal-line-img-01.png"
                alt="24時間受付 LINE予約の流れ"
                loading="lazy"
              />
            </p>
            <p className="mb-10">
              <img
                src="https://theme.selfull.jp/images/common/sp-modal-line-img-02.png"
                alt="まずは下のボタンから当院を友だち追加してください"
                loading="lazy"
              />
            </p>
            <a href="https://lin.ee/c7aeZt8" target="_blank">
              <img
                src="https://theme.selfull.jp/images/common/sp-modal-line-btn.png"
                alt="LINEで友達追加する"
                loading="lazy"
              />
            </a>
            <p className="txt-c">（LINEの友だち追加画面が開きます）</p>

            <div className="line-info">
              <p>
                友達に追加が完了したら、LINEのトーク画面より
                <br />
                「HPを見たのですが～」とメッセージをお送りください。
              </p>
              <p>ご予約の際は</p>
              <p>
                <span className="color05">■</span>{" "}
                <span className="bold">希望のご予約日時</span>
                <br />
                （第3希望までいただけると予約がスムーズです）
                <br />
                <span className="color05">■</span>{" "}
                <span className="bold">お名前と電話番号</span>
                <br />
                <span className="color05">■</span>{" "}
                <span className="bold">お悩みの症状</span>
              </p>
              <p>の３点をお送りください。</p>
            </div>
          </div>

          <div className="sp-modal-main-tel">
            <h2>
              <img
                src="https://www.ito-spo.com/wp-content/uploads/2021/11/5777edd641ee2628d33226ac11cac6ca1.png"
                title={SITE_NAME}
                alt=""
                loading="lazy"
              />
            </h2>

            <dl className="date">
              <dt>受付時間</dt>
              <dd>平日:{WEEKDAY_BUSINESS_HOURS}</dd>
              <dd>土曜:{WEEKEND_BUSINESS_HOURS}</dd>
              <dd>祝日:{HOLIDAY_BUSINESS_HOURS}</dd>
            </dl>
            <dl className="date">
              <dt>定休日</dt>
              <dd>日曜</dd>
            </dl>

            <a href={`tel:${TEL_WITHOUT_HYPHEN}`} className="tel tel-sp hover">
              <span>電話をかける</span>
            </a>
            <p className="txt-c">（{TEL}に発信します）</p>

            <div className="tel-flow">
              <h2>ご予約の流れ</h2>
              <div className="comment-item comment-item-right clearfix">
                <p>
                  お電話ありがとうございます、
                  <br />
                  アンドライフ整骨院鍼灸院でございます。
                </p>
                <div className="img">
                  <img
                    src="https://theme.selfull.jp/images/common/sp-modal-tel-img-01.png"
                    alt="予約の流れ"
                    loading="lazy"
                  />
                </div>
              </div>
              <p>と電話に出ますので、</p>
              <div className="comment-item clearfix">
                <p>
                  ホームページを見たのですが、
                  <br />
                  予約をお願いします。
                </p>
                <div className="img">
                  <img
                    src="https://theme.selfull.jp/images/common/sp-modal-tel-img-02.png"
                    alt="予約の流れ"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mb-20">とお伝えください。</p>
              <p>
                <span className="color03">■</span>{" "}
                <span className="bold">お名前（フルネーム）</span>
                <br />
                <span className="color03">■</span>{" "}
                <span className="bold">ご予約の日</span>
                <br />
                <span className="color03">■</span>{" "}
                <span className="bold">ご連絡がつくお電話番号</span>
                <br />
                <span className="color03">■</span>{" "}
                <span className="bold">一番気になるお身体の状態・症状</span>
              </p>
              <p>をお伺いいたします。</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
