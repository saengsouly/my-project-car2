// Header.js
import React from 'react';
import './Header.css'; // We'll create this CSS file next

const HeaderNavItem = ({ text, highlight = false, url = '#' }) => {
  return (
    <a href={url} className={`header-nav-item ${highlight ? 'highlight' : ''}`}>
      {text}
    </a>
  );
};

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-left">
          <HeaderNavItem text="FEEDBACK" highlight={true} />
        </div>
        <div className="header-right">
          <HeaderNavItem text="SAVE MORE ON APP" />
          <HeaderNavItem text="SELL ON LAZADA" />
          <HeaderNavItem text="CUSTOMER CARE" />
          <HeaderNavItem text="TRACK MY ORDER" />
          <HeaderNavItem text="LOGIN" />
          <HeaderNavItem text="SIGNUP" />
          <HeaderNavItem text="เปลี่ยนภาษา" /> {/* Assuming this means "Change Language" */}
        </div>
      </div>
    </div>
  );
};

export default Header;