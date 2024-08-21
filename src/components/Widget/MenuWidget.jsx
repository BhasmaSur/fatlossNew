import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuWidget({ data, scrollToSection }) {
  return (
    <ul className="cs_menu_widget cs_mp0">
      {data?.map((item, index) => (
        <li key={index} onClick={()=>scrollToSection(index+1)}>
          <Link to={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
