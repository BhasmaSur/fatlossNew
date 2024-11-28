import React, { useMemo, useState } from "react";
import Rating from "../Rating";
import VideoModal from "../VideoModal";

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const videoSrc = useMemo(() => {
    switch (activeTab) {
      case 1:
        return "./videos/kewadiya.mp4";
      case 2:
        return "./videos/patil.mp4";
      case 3:
        return "./videos/chopra.mp4";
    }
  }, [activeTab]);

  const imgSrc = useMemo(() => {
    switch (activeTab) {
      case 1:
        return "./images/kewadiya.png";
      case 2:
        return "./images/patil.png";
      case 3:
        return "./images/chopra.png";
    }
  }, [activeTab]);
  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links">
        <li className={activeTab === 1 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(1)}>
            <div className="cs_testimonial_1_avatar">
              <img src="./images/kewadiya.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Trushal Kawadiya</h3>
                <p className="cs_heading_color mb-0">Pune, IN</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 2 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(2)}>
            <div className="cs_testimonial_1_avatar">
              <img src="./images/patil.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Prabash Patil</h3>
                <p className="cs_heading_color mb-0">Pune, IN</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 3 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(3)}>
            <div className="cs_testimonial_1_avatar">
              <img src="./images/chopra.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Ujwala Chopra</h3>
                <p className="cs_heading_color mb-0">Pune, IN</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="cs_tab_body">
        {activeTab === 1 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              I was overweight, dedication to health and wellness led to a
              remarkable 11 kg weight loss in 2 months, I feel energetic now.
            </p>
            <Rating ratingNumber={5} />
            <br />
            <VideoModal
              videoUrl={
                videoSrc
              }
              videoBtnText={"video"}
              variant="cs_gray_bg_1"
            />
          </div>
        )}
        {activeTab === 2 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              Within 2 months I have reduced 19.4kgs as well as brought me BP
              and Sugar level back to normal range. Throughout the course I have
              recieved training and guidance.
            </p>
            <Rating ratingNumber={5} />
            <br />
            <VideoModal
              videoUrl={
                videoSrc
              }
              videoBtnText={"video"}
              variant="cs_gray_bg_1"
            />
          </div>
        )}
        {activeTab === 3 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              I had trouble in walking due to severe pain in knees, after
              joining this program I have lost 9kgs. Not only I can walk, I can
              walk faster than usual, I feel lighter and better with my knee
              pain almost gone.
            </p>
            <Rating ratingNumber={5} />
            <br />
            <VideoModal
              videoUrl={videoSrc}
              videoBtnText={"video"}
              variant="cs_gray_bg_1"
            />
          </div>
        )}
      </div>
    </div>
  );
}
