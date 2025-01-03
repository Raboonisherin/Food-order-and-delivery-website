import React from 'react';
import styles from '../styles/Offers.module.css';

const Offers = () => {
    return (
        <div className={styles.container}>
            <h1>Today Special Offers</h1>
            <h2><strong>Check out our latest offers and promotions :</strong></h2>
           <br></br>
            <ul className={styles.offerList}>
                <li>Get a free burger with every purchase of a large fries</li>
                
                <li>50% off on all combo meals this weekend</li>
                
                <li>Buy one, get one free on selected sandwiches</li>
               
                <li>Free drink upgrade with any sandwich purchase</li>
            </ul>
        </div>
    );
};

export default Offers;
