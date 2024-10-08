import React from "react";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import TextWidget from "../Widget/TextWidget";
const menuDataOne = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/" },
  // { title: 'Departments', href: '/' },
  { title: "Our Team", href: "/" },
  { title: "Testimonials", href: "/" },
  { title: "Contact us", href: "/" },
  // { title: 'Testimonials', href: '/' },
];
const menuDataTwo = [
  // { title: 'Blog', href: '/' },
  // { title: 'Contact Us', href: '/' },
  // { title: 'FAQs', href: '/' },
  // { title: 'Privacy Policy', href: '/' },
  // { title: 'Terms and Conditions', href: '/' },
];

export default function Footer({
  scrollToSection,
  contactSection
}) {
  return (
    <footer
      ref={contactSection}
      className="cs_footer cs_style_1 cs_heading_color"
    >
      <div
        className="cs_footer_logo_wrap"
        style={{ backgroundImage: "url(/images/footer_bg_1.svg)" }}
      >
        <div
          className="cs_footer_brand"
          style={{ backgroundImage: "url(/images/footer_logo_bg.svg)" }}
        >
          <img
            src="/images/logo_icon.svg"
            alt="Logo Icon"
            className="cs_footer_brand_icon"
          />
          <h2 className="cs_footer_brand_text">SRP</h2>
        </div>
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <TextWidget text="Scientific <br />Reversal Program" />
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget
                  scrollToSection={scrollToSection}
                  data={menuDataOne}
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_footer_item">
                {/* <Newsletter
                  title="Be Our Subscribers"
                  subTitle="To get the latest news about health from our experts"
                /> */}
                <img src="/images/sli.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2024 SRP. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
