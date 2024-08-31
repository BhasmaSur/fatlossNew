import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import BrandsSection from "../Section/BrandsSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import FeaturesSection from "../Section/FeaturesSection";
import TestimonialSection from "../Section/TestimonialSection";
import BlogSection from "../Section/BlogSection";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSection from "../Section/FaqSection";
import AwardSection from "../Section/AwardSection";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";
import Team from "../Team";
import TeamSection from "../Section/TeamSection";

const teamData = [
  {
    imgUrl: "images/doctor_1.png",
    name: "Dr. Suresh Shinde",
    designation: "Physician & Diabetologist",
    description:
      "Over 45 Years of Clinical Medical Practice. Studied Glucose and Insulin Kinetics in over 2500 patients. Visionary Founder of Scientific Reversal Program. Awards for Diabetes Research in National and International Conferences",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/doctor_2.jpeg",
    name: "Dr. Rituparna Shinde",
    designation: "Interventional Cardiologist",
    description:
      "15 Years of Clinical Practice in Preventive & Interventional Cardiology. Founder of Aloha Lifestyle Reversal Studio. Published International Research Papers, Innovator in Conceptualisation",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/doctor_4.png",
    name: "Dr. Suchitra Bhangale",
    designation: "Senior Clinical Researcher",
    description:
      "Senior Clinical Researcher with 22 Clinical Trials Experience. Certified from John's Hopkins University, Expert in Protocol Designing. Proficient in Computer Data Management, NABH and Clinical Research Audits Specialist",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/doctor_3.png",
    name: "Dr. Kartiki Gole",
    designation: "Dietician & Nutrition Consultant",
    description:
      "BSc in Home Science, MSc in Nutritional Science and Diebetes. Specialized in crafting personalised nutrition plans. Dedicated to promoting healthy lifestyle choices.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
];
const featureListData = [
  {
    iconSrc: "/images/home_1/compassion.svg",
    title: "Scientifically designed",
    subTitle: "Supply of diet & nutrition for the entire program duration",
  },
  {
    iconSrc: "/images/home_1/excellence.svg",
    title: "Dr. Roy Taylor's",
    subTitle: "Specialist Doctor Consultations",
  },
  {
    iconSrc: "/images/home_1/integrity.svg",
    title: "Metabolic Profile Check",
    subTitle: `Clinical Psychology Counselling`,
  },
  {
    iconSrc: "/images/home_1/respect.svg",
    title: "Resistance Assessment",
    subTitle: "Access to India's first AI-enabled Medical Gym",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title: "Body Composition Scan",
    subTitle: "Diet & Nutrition Consultations",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title: "Monitoring",
    subTitle: "Complimentary Digital Weighing Scale",
  },
];

const departmentData = [
  {
    iconSrc: "/images/home_1/compassion.svg",
    title: "Scientifically designed, intensive 14-day program",
  },
  {
    iconSrc: "/images/home_1/excellence.svg",
    title: "Based on Dr. Roy Taylor's direct trials",
  },
  {
    iconSrc: "/images/home_1/integrity.svg",
    title: `Pre & post Complete Metabolic Profile Check`,
  },
  {
    iconSrc: "/images/home_1/respect.svg",
    title: "Insulin & Leptin Resistance Assessment",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title:
      "DXA Full Body Composition Scan for Fat Muscle and Bone Density Assessment",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title: "Continuous Glucose monitoring with a wireless device",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title: "Blood Ketone monitoring for Fat-burning Analysis",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title:
      "24/7 real-time & non-invasive sugar monitoring for both Doctors and Patient",
  },
];

const brandData = [
  { imgUrl: "images/brand_1.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_2.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_3.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_4.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_5.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_6.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_7.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_8.png", imgAlt: "Brand" },
];

const faqData = [
  {
    title: "What is the Reverse Lifestyle Disease Program?",
    content:
      "Our program focuses on reversing lifestyle diseases like obesity, diabetes, and hypertension through supervised, clinic-based treatments.",
  },
  {
    title: "How do I join the program?",
    content:
      "You can join our program by contacting us on our mobile : 9422334422.",
  },
  {
    title: "What should I expect during the program?",
    content:
      "Expect comprehensive medical care, personalized treatment plans, and continuous support from our expert team.",
  },
  {
    title: "Do you offer online consultations?",
    content:
      "Yes, we offer online consultations for initial assessments and follow-up appointments.",
  },
  {
    title: "What is the duration of the program?",
    content:
      "The duration of the program varies depending on individual needs and treatment plans.",
  },
];

const blogData = [
  {
    title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    thumbUrl: "images/home_1/post_1.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "Healthy Eating on a Budget: Tips and Strategies",
    thumbUrl: "images/home_1/post_2.jpeg",
    date: "May 4, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    thumbUrl: "images/home_1/post_3.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
];

const awardData = [
  {
    title: "Malcolm Baldrige National Quality Award",
    subTitle:
      "Recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "HIMSS Davies Award",
    subTitle:
      "Recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Healthgrades National’s Best Hospital",
    subTitle:
      "Given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Joint Commission Gold Seal of Approval",
    subTitle:
      "Given to hospitals that have met rigorous standards for patient safety and quality of care.",
    iconUrl: "images/icons/award.svg",
  },
];

export default function Home({
  testimonialSection,
  aboutSection,
  menuSection,
  teamSection,
}) {
  pageTitle("Home");
  return (
    <>
      <Hero
        title="SCIENTIFIC REVERSAL PROGRAM"
        subTitle="Expert Programs for Obesity, Diabetes, Hypertension, Dyslipidemia, Sleep Apnea, PCOS, Pre-Prediabetes, Prediabetes, Type 2 diabetes"
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero_bg_1.jpeg"
        videoBtnText="See how we work"
        videoUrl="https://youtube.com/embed/1EyazelYoWw?si=bxcZbLzGm6K5gvqt"
        infoList={[
          {
            title: "A Scientifically Designed Program",
            subTitle: "",
            iconUrl: "/images/contact/icon_1.svg",
          },
          {
            title: "24/7 Doctors’ Support",
            subTitle: "",
            iconUrl: "/images/icons/ambulance.svg",
          },
          {
            title: "Includes Complete Diet Supply",
            subTitle: "",
            iconUrl: "/images/icons/pin.svg",
          },
        ]}
        btnText="Book Now"
        btnUrl="/"
        selectedSection={menuSection}
      />

      {/* Start About Section */}
      <Section selectedSection={aboutSection}>
        <AboutSection
         imgUrl="/images/home_1/about.jpg"
         spiningImgUrl="/images/home_1/about_mini.svg"
         title="About Us"
         subTitle="SCIENTIFIC REVERSAL PROGRAM"
         featureList={[
           {
             featureListTitle: "Why should you enroll in the program?",
             featureListSubTitle:
               "In the diverse fabric of Indian life, the Scientific Reversal Program blends tradition with health wisdom, ensuring present well-being and making an invaluable investment in lasting health that your future self will truly appreciate",
           },
         ]}
         />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="How is our program different from others?"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>

      {/* End Departments Section */}
      {/* Start Award Section */}
      {/* <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Our Achievements" data={awardData} />
      </Section> */}
      {/* End Award Section */}
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection
          sectionTitle="What are the additional benefits?"
          data={featureListData}
        />
      </Section>
      {/* End Feature Section */}
      {/* Start Team Section */}
      <Section
        selectedSection={teamSection}
        topMd={190}
        topLg={145}
        topXl={105}
      >
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      {/* End Team Section */}
      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        selectedSection={testimonialSection}
      >
        <TestimonialSection
          sectionTitle="Testimonials"
          sectionTitleDown="What Our Patients Say"
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.jpg"
          title="Don't Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>
      {/* End Banner Section */}
      {/* Start Blog Section */}
      {/* <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Updates"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section> */}
      {/* End Blog Section */}
      {/* Start Appointment Section */}
      {/* <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpg"
        />
      </Section> */}
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Frequently Asked Questions"
          sectionTitleUp="FAQs"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      {/* <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} />
      </Section> */}
      {/* End Brand Section */}
    </>
  );
}
