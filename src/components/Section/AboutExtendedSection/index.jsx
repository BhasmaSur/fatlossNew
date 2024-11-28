import React from "react";
import Spacing from "../../Spacing";
import SectionHeading from "../../SectionHeading";
import EqualGrid from "../../EqualGrid/equalGrid";

const aboutUsData = {
  heading:
    "In a world shaped by urbanisation and sedentary lifestyles, understanding insulin's role is vital. The Scientific Reversal Programme ofers hope, addressing obesity and promoting overall well-being.",
};
export default function AboutExtendedSection({
  imgUrl,
  spiningImgUrl,
  title,
  subTitle,
  featureList,
}) {
  return (
    <section className="cs_about cs_style_1">
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse cs_gap_y_40">
          <SectionHeading center />
          <div>
            <p className="cs_banner_subtitle cs_heading_color cs_fs_20 cs_medium m-20">
              {aboutUsData.heading}
            </p>
            <EqualGrid
              firstHeading={"Lifestyle Challenges"}
              firstContent={
                "Urbanisation & sedentary habits contribute to rising health issues."
              }
              secondHeading={"BMI Guidance"}
              secondContent={
                "The BMI Chart underscores the importance of maintaining a healthy weight."
              }
            />
            <br/>
            <EqualGrid
              firstHeading={"Insulin's Impact"}
              firstContent={
                "Imbalances in insulin can lead to conditions like Diabetes and Obesity."
              }
              secondHeading={"Scientific Reversal Program"}
              secondContent={
                "Hence, a structured approach to combat obesity and reclaim health and vitality."
              }
            />
          </div>
          <img src="./images/bmi.png"/>
        </div>
      </div>
    </section>
  );
}
