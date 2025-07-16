import React from 'react';

const navItems = ['Home', 'Projects', 'Resume', 'Contact'];

export default function Sidebar({ current, setCurrent }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-title">Max Gleason | IT &amp; Cybersecurity</div>
      <ul>
        {navItems.map(item => (
          <li
            key={item}
            className={current === item ? 'active' : ''}
            onClick={() => setCurrent(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
