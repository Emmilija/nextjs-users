import Head from 'next/head';
import styles from '@/styles/Home.module.css'; 
import React from 'react';


export default function Home() {
  return (
    <main>
      <Head>
        <title>Home Page</title>
        <meta name='keywords' content='nextjs' />
      </Head>
<div>
<h1 className={styles.heading}>
        Welcome to my Nextjs App
      </h1> 
</div>
     
    </main>
  );
}