import React from 'react';
import Spacing from '../Spacing';

export default function Section({
  topMd = '_',
  topLg = '_',
  topXl = '_',
  bottomMd = '_',
  bottomLg = '_',
  bottomXl = '_',
  children,
  selectedSection,
  ...props
}) {
  return (
    <section ref={selectedSection} {...props}>
      <Spacing md={topMd} lg={topLg} xl={topXl} />
      {children}
      <Spacing md={bottomMd} lg={bottomLg} xl={bottomXl} />
    </section>
  );
}
