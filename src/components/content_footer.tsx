import React from "react";
import {
  ADDRESS,
  HOLIDAY_BUSINESS_HOURS,
  TEL,
  TEL_WITHOUT_HYPHEN,
  WEEKDAY_BUSINESS_HOURS,
  WEEKEND_BUSINESS_HOURS,
  ZIP,
} from "./const";

const ContentFooter: React.FC = () => {
  return (
    <footer id="content-footer">
      <h2>
        <img
          src="https://www.ito-spo.com/wp-content/uploads/2021/11/5777edd641ee2628d33226ac11cac6ca1.png"
          alt="アンドライフ整骨院鍼灸院"
          loading="lazy"
        />
      </h2>

      <div id="content-footer-main-1">
        <div className="clearfix">
          <div>
            <p className="tel tel-pc">
              <span className="tel-number">{TEL}</span>
            </p>
            <a href={`tel:${TEL_WITHOUT_HYPHEN}`} className="tel tel-sp hover">
              <span>{TEL}</span>
            </a>

            <div className="btn-list sp-area">
              <a href="https://www.ito-spo.com/contact/" className="mail hover">
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
        <div className="btn-list pc-area">
          <a href="https://www.ito-spo.com/contact/" className="mail hover">
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
      </div>

      <p className="address">
        <span>{ZIP}</span>
        {ADDRESS}
      </p>
      <div className="googlemap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.3557643172503!2d130.2330766155112!3d33.57011105042945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541ebd2f85f2807%3A0x9888fc5b420c1a59!2z44CSODE5LTExMDIg56aP5bKh55yM57O45bO25biC6auY55Sw77yV5LiB55uu77yR4oiS77yR77yW!5e0!3m2!1sja!2sjp!4v1614922557647!5m2!1sja!2sjp"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};
