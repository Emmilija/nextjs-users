import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav >
     <div className='logo'>
    <Image src="/next-js.png" as='image' alt='logo' width={168} height={95} priority />
  </div>


 
      <ul className={styles.navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/photos">Photos</Link></li>
        <li><Link href="/users">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;