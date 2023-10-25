import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


const Navbar = () => {
  return (
    <nav >
     <div className='logo'>
    <img rel="preload" src="/LOGOnext-js.png" as='image' alt='logo' width={128} height={125}  />
  </div>


 
      <ul className={styles.navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/photos">Photos</Link></li>
        <li><Link href="/users">Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;