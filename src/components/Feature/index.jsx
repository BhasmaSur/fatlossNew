import React from 'react';

export default function Feature({ iconSrc, title, subTitle }) {
  return (
    <div className="cs_feature cs_style_1 cs_shadow_1 cs_radius_25 cs_white_bg">
      <div className="cs_feature_icon cs_accent_bg cs_center rounded-circle">
          <img src={iconSrc} alt="Icon" />
        </div>
        <span>{subTitle}</span>
      {/* <p className="m-0 text-center">{subTitle}</p> */}
    </div>
  );
}
