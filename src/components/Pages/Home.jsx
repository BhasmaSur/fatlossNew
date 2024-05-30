import React from 'react';
import Hero from '../Hero';
import AboutSection from '../Section/AboutSection';
import BrandsSection from '../Section/BrandsSection';
import Banner from '../Section/BannerSection';
import Section from '../Section';
import FeaturesSection from '../Section/FeaturesSection';
import TestimonialSection from '../Section/TestimonialSection';
import BlogSection from '../Section/BlogSection';
import AppointmentSection from '../Section/AppointmentSection';
import FaqSection from '../Section/FaqSection';
import AwardSection from '../Section/AwardSection';
import DepartmentSection from '../Section/DepartmentSection';
import { pageTitle } from '../../helpers/PageTitle';

const featureListData = [
  {
    iconSrc: '/images/home_1/compassion.svg',
    title: 'Compassion',
    subTitle:
      'We create a welcoming and supportive environment that puts our patients at ease.',
  },
  {
    iconSrc: '/images/home_1/excellence.svg',
    title: 'Excellence',
    subTitle:
      'We provide excellent medical care and continuously improve our skills and resources.',
  },
  {
    iconSrc: '/images/home_1/integrity.svg',
    title: 'Integrity',
    subTitle: `We practice medicine with integrity and transparency, always putting our patient's interests first.`,
  },
  {
    iconSrc: '/images/home_1/respect.svg',
    title: 'Respect',
    subTitle:
      'We treat all individuals with respect and dignity, regardless of their background.',
  },
  {
    iconSrc: '/images/home_1/teamwork.svg',
    title: 'Teamwork',
    subTitle:
      'We work collaboratively with our team members and other healthcare professionals.',
  },
];

const brandData = [
  { imgUrl: 'images/brand_1.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_2.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_3.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_4.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_5.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_6.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_7.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_8.png', imgAlt: 'Brand' },
];

const faqData = [
  {
    title: 'What is the Reverse Lifestyle Disease Program?',
    content:
      'Our program focuses on reversing lifestyle diseases like obesity, diabetes, and hypertension through supervised, clinic-based treatments.',
  },
  {
    title: 'How do I join the program?',
    content:
      'You can join our program by filling up appointment form on our website or contacting our clinic directly for more information.',
  },
  {
    title: 'What should I expect during the program?',
    content:
      'Expect comprehensive medical care, personalized treatment plans, and continuous support from our expert team.',
  },
  {
    title: 'Do you offer online consultations?',
    content:
      'Yes, we offer online consultations for initial assessments and follow-up appointments.',
  },
  {
    title: 'What is the duration of the program?',
    content:
      'The duration of the program varies depending on individual needs and treatment plans.',
  },
];

const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: 'images/home_1/post_1.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Healthy Eating on a Budget: Tips and Strategies',
    thumbUrl: 'images/home_1/post_2.jpeg',
    date: 'May 4, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: 'images/home_1/post_3.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
];

const awardData = [
  {
    title: 'Malcolm Baldrige National Quality Award',
    subTitle:
      'Recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'HIMSS Davies Award',
    subTitle:
      'Recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'Healthgrades National’s Best Hospital',
    subTitle:
      'Given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'Joint Commission Gold Seal of Approval',
    subTitle:
      'Given to hospitals that have met rigorous standards for patient safety and quality of care.',
    iconUrl: 'images/icons/award.svg',
  },
];

const departmentData = [
  {
    title: 'Nutrition and Dietetics',
    iconUrl: 'images/home_1/department_icon_1.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Cardiology',
    iconUrl: 'images/home_1/department_icon_2.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Endocrinology',
    iconUrl: 'images/home_1/department_icon_3.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Primary Care',
    iconUrl: 'images/home_1/department_icon_4.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Physical Therapy',
    iconUrl: 'images/home_1/department_icon_5.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Psychiatry and Counseling',
    iconUrl: 'images/home_1/department_icon_6.svg',
    href: '/departments/department-details',
  },
];

export default function Home() {
  pageTitle('Home');
  return (
    <>
      <Hero
        title="Reverse Lifestyle Diseases"
        subTitle="Expert Programs for Obesity, Diabetes, and Hypertension"
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero_img.png"
        videoBtnText="See how we work"
        videoUrl="https://youtube.com/embed/1EyazelYoWw?si=bxcZbLzGm6K5gvqt"
        infoList={[
          {
            title: 'Hotline',
            subTitle: '9898989898',
            iconUrl: '/images/contact/icon_1.svg',
          },
          {
            title: 'Ambulance',
            subTitle: '876256876',
            iconUrl: '/images/icons/ambulance.svg',
          },
          {
            title: 'Location',
            subTitle: 'Pune, IN',
            iconUrl: '/images/icons/pin.svg',
          },
        ]}
        btnText="Book Now"
        btnUrl="/"
      />
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl="/images/home_1/about.jpg"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="SCIENTIFIC REVERSAL PROGRAM"
          featureList={[
            {
              featureListTitle:
                'Our team of experienced medical professionals',
              featureListSubTitle:
                'We are dedicated to providing top-quality healthcare services focused on reversing lifestyle diseases through a holistic approach.',
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Departments"
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
      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Testimonials"
          sectionTitleDown="What Our Clients Say"
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
      <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpg"
        />
      </Section>
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
