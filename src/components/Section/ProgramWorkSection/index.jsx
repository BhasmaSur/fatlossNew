import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import ResponsiveTabs from '../../Tabs';

export default function ProgramWorkSection({ sectionTitle, data }) {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1" />
      <div className="container">
        <SectionHeading title={sectionTitle} center />
        <Spacing md="72" lg="50" />
        <div className="cs_random_features">
          <ResponsiveTabs/>
        </div>
      </div>
    </div>
  );
}
