import React from "react";
import styles from "./HomeUI.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function HomeUI() {
  return (
    
    <div className={styles.homeContainer}>        
          
          <div className={styles.main}>
            <h1 >Hello World</h1>
            <div className={styles.imageContainer}>
              <Image 
                src="/Earthimage1.jpg"
                alt="Earth Image"
                width={287}
                height={176}
              />
              <Image 
                src="/globe.svg"
                alt="globe Image"
                width={176}
                height={176}
              />
            </div>
            <p>
              Get started by editing app/page.tsx
            </p><br />
            <p>
              <Link href="/dashboard">Click here to go to Dashboard</Link>
            </p>
          </div>
    </div>
  );
}