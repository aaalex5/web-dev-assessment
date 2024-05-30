import React from 'react';
import logo from '../assets/stackline_logo.svg';

const Header = () => {
  return (
    <header style={styles.header}>
      <img src={logo} alt="Stackline Logo" style={styles.logo} />
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#000435',
    borderBottom: '1px solid #e0e0e0',
  },
  logo: {
    height: '40px',
  },
};

export default Header;