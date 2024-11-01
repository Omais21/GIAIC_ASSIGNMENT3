import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} bg-gray-800 text-white p-1`}>
      <p>@ Omais Rao. All rights reserved</p>
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
    </footer>
  );
};

export default Footer;
