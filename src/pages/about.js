import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'; 

const About = () => {
  return (
<>
    <Head>
    <title>About Page</title>
    <meta name='keywords' content='nextjs' />
            </Head>


    <main className={styles.main}>
      <div >
        <h1 className={styles.heading}>About page</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, aliquam! Autem vitae sunt ipsa necessitatibus natus odit similique molestias, dolore illo quia, aspernatur doloribus nobis est, nulla sit ipsam! Molestias!t consectetur adipisicing elit. Est, aliquam! Autem vitae sunt ipsa necessitatibus natus odit similique molestias, dolore illo quia, aspernatur doloribus nobis est, nulla sit ipsam! Molestias!
        </p>

        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, aliquam! Autem vitae sunt ipsa necessitatibus natus odit similique molestias, dolore illo quia, aspernatur doloribus nobis est, nulla sit ipsam! Molestias!t consectetur adipisicing elit. Est, aliquam! Autem vitae sunt ipsa necessitatibus natus odit similique molestias, dolore illo quia, aspernatur doloribus nobis est, nulla sit ipsam! Molestias!
        </p>

    
        
      </div>
    </main>
    </>
  );
};

export default About;