import React from 'react';
import parse from 'html-react-parser';
import VideoModal from '../VideoModal';
import { Link } from 'react-router-dom';

export default function Hero({
  title,
  subTitle,
  bgUrl,
  imgUrl,
  videoBtnText,
  videoUrl,
  infoList,
  btnText,
  btnUrl,
  selectedSection,
}) {
  return (
    <section ref={selectedSection} className="cs_hero cs_style_1">
      <div
        className="cs_hero_wrap cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="container">
          <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_fs_94" style = {{
              "color": "#0984e3"
            }}>{parse(title)}</h1>
            <p className="cs_hero_subtitle cs_fs_20 cs_heading_color"  style = {{
              "color": "#0984e3"
            }}>
              <div>
                Exper program for : 
              </div>
              <div>Obesity</div>
              <div>Diabetes</div>
              <div>Hypertension</div>
              <div>Dyslipidemia</div>
              <div>Sleep Apnea</div>
              <div>PCOS</div>
              <div>Pre-Prediabetes</div>
              <div>Prediabetes</div>
              <div>Type 2 diabetes</div>
            </p>
            {/* <div className="cs_hero_info_col">
              <Link to={btnUrl} className="cs_btn cs_style_1">
                <span>{btnText}</span>
                <i>
                  <img src="/images/icons/arrow_white.svg" alt="Icon" />
                  <img src="/images/icons/arrow_white.svg" alt="Icon" />
                </i>
              </Link>
            </div> */}
          </div>
          <img src={imgUrl} alt="Hero" className="cs_hero_img" />
          <div className="cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15">
            {infoList.map((item, index) => (
              <div className="cs_hero_info_col" key={index}>
                <div className="cs_hero_info d-flex align-items-center">
                  <div className="cs_hero_info_icon cs_center rounded-circle cs_accent_bg">
                    <img src={item.iconUrl} alt="Icon" />
                  </div>
                  <div className="cs_hero_info_right">
                    <h3 className="cs_hero_info_title cs_semibold">
                      {item.title}
                    </h3>
                    <p className="cs_hero_info_subtitle cs_fs_20">
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
