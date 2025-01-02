// Navbar.js

import Image from "next/image";
import Link from 'next/link';
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/call.png" alt="" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW</div>
                    <div className={styles.text}>8610 9029 15</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}><Link href="/">Homepage</Link></li>
                    <li className={styles.listItem}><a href="#pizzaList">Food items</a></li>
                    <li className={styles.listItem}><Link href="/offers">Offers</Link></li>
                    <Image src="/img/Indian food (1).png" alt="" width="70" height="70"/>
                    <li className={styles.listItem}><Link href="/about">About Us</Link></li>
                    <li className={styles.listItem}><Link href="/ContactUs">Contact Us</Link></li>
                </ul>
            </div>
            <div className={styles.item}>
                <Link href="/cart">
                    <div className={styles.cart}>
                        <Image src="/img/carto.png" alt="" width="30" height="30"/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
