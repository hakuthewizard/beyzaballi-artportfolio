import React from 'react';
import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        
        <nav className={styles.navbar}>
            <div className={styles.leftItems}>
                
                    <Image  className={styles.logo} src="/beyza.png" width={50} height={50} alt="Beyza Ballı Art Portfolio" />
                    <h3>Beyza B. Art Portfolio</h3>
               
            </div>
            <div className={styles.rightItems}>
                <Link href="https://www.linkedin.com/in/beyza-b-014882177/" passHref>
                    <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className={styles.svg} />
                </Link>
                <Link href="https://www.behance.net/beyzaball1" passHref>
                    <Image src="/behance.svg" alt="Behance" width={32} height={32} className={styles.svg} />
                </Link>
                <Link href="https://github.com/hakuthewizard" passHref>
                    <Image src="/github.svg" alt="GitHub" width={32} height={32} className={styles.svg} />
                </Link>
                <Link href="https://beyza-frontend-uidesign-portfolio.vercel.app/" passHref>
                    <div className={styles.devPortfolio}>
                        <button>UI Development Portfolio</button>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
