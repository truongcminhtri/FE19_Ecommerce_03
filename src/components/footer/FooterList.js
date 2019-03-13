import React from "react";

export const FooterList = ({ footerList }) => {
  return (
    <div>
      {footerList.map(item => (
        <li>
          <i className="fas fa-chevron-right">{item}</i>
        </li>
      ))}
    </div>
  );
};
