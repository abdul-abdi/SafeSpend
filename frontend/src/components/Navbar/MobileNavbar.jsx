import { FaTimes, FaBars } from "react-icons/fa";
import styles from "../../styles/Navbar/MobileNavbar.module.scss"

import ListItemLink from "./ListItemLink";

import { useState, useEffect } from "react";

const MobileNavbar = () => {
    const [ navOpen, setNavOpen] = useState(false);
    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <div className={styles.container}>
            <div>
            <div
             className={`${styles.iconContainer} ${styles.bars}`} 
             onClick={() => setNavOpen(true)}
             >
                <FaBars />
            </div>
            <nav className={navOpen ? styles.navActive :undefined}>
                <ul>
                <div
                 className={`${styles.iconContainer} ${styles.times}`} 
                 onClick={() => setNavOpen(false)}
                 >
                    <FaTimes />
                </div>


                
                    <ListItemLink url=""
                    optionClass={styles.linkColor}
                    clickHandler={closeNav}
                    >
                        <h3>Home</h3>
                    </ListItemLink>
                


                
                    <ListItemLink url="categories"
                    optionClass={styles.linkColor}
                    clickHandler={closeNav}
                    >
                        <h3>Categories</h3>
                    </ListItemLink>
                


                
                    <ListItemLink url="transactions"
                    optionClass={styles.linkColor}
                    clickHandler={closeNav}
                    >
                        <h3>Transactions</h3>
                    </ListItemLink>
                


                
                    <ListItemLink url="wallet"
                    optionClass={styles.linkColor}
                    clickHandler={closeNav}
                    >
                        <h3>Wallet</h3>
                    </ListItemLink>
                

              
                <div 
                className={styles.mobileMenuLinks} >
                    <ListItemLink url="profile"
                    optionClass={styles.linkColor}
                    clickHandler={closeNav}
                    >
                        <h3>Profile</h3>
                    </ListItemLink>
                </div>


                <div 
                className={styles.mobileMenuLinks} >
                    <ListItemLink url="settings"
                    optionClass={styles.linkColor}
                    clickHandler={closeNav}
                    >
                        <h3>Settings</h3>
                    </ListItemLink>
                </div>


                
                    <ListItemLink url="logout" optionClass={styles.linkColor}>
                        <h3>Logout</h3>
                    </ListItemLink>
                
                </ul>
            </nav>
            
            </div>
        </div>
    );
};

export default MobileNavbar;